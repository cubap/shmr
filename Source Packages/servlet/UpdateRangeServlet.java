/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import common.Constant;
import entity.Annotation;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author hanyan
 */
public class UpdateRangeServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Annotation anno = new Annotation();
        anno.setNamespace(request.getParameter("namespace"));
        anno.setContent(request.getParameter("content"));
//        anno.setSelector(request.getParameter("selector"));
        anno.setTitle(request.getParameter("title"));
//        anno.setResource(URLEncoder.encode(request.getParameter("resource"), "utf-8"));
//        anno.setResourceType(request.getParameter("resourceType"));
//        anno.setOutterRelative(request.getParameter("outterRelative"));
        anno.setAddedTime(System.currentTimeMillis()); //This value is set in annotationStore.
//        anno.setFontColor(request.getParameter("fontColor"));
//        anno.setFontType(request.getParameter("fontType"));
        if(null != request.getParameter("permission")){
            anno.setPermission(Integer.parseInt(request.getParameter("permission")));
        }else{
            anno.setPermission(0);
        }
        anno.setOriginalAnnoID("");
        anno.setVersionNum(1); // this value is set in annotationStore. 
        anno.setForkFromID(request.getParameter("forkFromID"));
        try {
            URL postUrl = new URL(Constant.ANNOTATION_SERVER_ADDR + "/anno/updateAnnotation");
            HttpURLConnection connection = (HttpURLConnection) postUrl.openConnection();
            connection.setDoOutput(true);
            connection.setDoInput(true);
            connection.setRequestMethod("POST");
            connection.setUseCaches(false);
            connection.setInstanceFollowRedirects(true);
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            connection.connect();
            DataOutputStream out = new DataOutputStream(connection.getOutputStream());
            //TODO value to save
            out.writeBytes(request.getParameter("canvasToSave"));
            out.flush();
            out.close(); // flush and close
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(),"utf-8"));
            String line="";
            StringBuilder sb = new StringBuilder();
            while ((line = reader.readLine()) != null){
                //line = new String(line.getBytes(), "utf-8");  
                System.out.println(line);
                sb.append(line);
            }
            reader.close();
            connection.disconnect();
            response.setHeader("Content-Location", "absoluteURI");
            response.getWriter().print(sb.toString());
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(UpdateRangeServlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(UpdateRangeServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }
}
