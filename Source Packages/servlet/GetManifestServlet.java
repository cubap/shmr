/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import common.Constant;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author hanyan
 */
public class GetManifestServlet extends HttpServlet {
    private String username;
    private static String url = "";
    private static final String context = "http://www.shared-canvas.org/ns/context.json";
    private static final String type = "sc:Manifest";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        url = request.getContextPath() + "/getManifest";
        username = request.getParameter("username");
        String ranges = "";
        JSONArray a_metadata = new JSONArray();
        if(null == username || username.equals("debra")){
            ranges = getAnnoByProperties("{\"@type\":\"sc:Range\",\"forProject\":\"broken_books_debra\"}");
            JSONObject metadata1 = new JSONObject();
            JSONObject metadata2 = new JSONObject();
            JSONObject metadata3 = new JSONObject();
            metadata1.element("label", "Title");
            metadata1.element("value", "Llangattock Breviary Reconstruction");
            metadata2.element("label", "Created By");
            metadata2.element("value", "SLU Center for Digital Humanities");
            metadata3.element("label", "Anchor Object"); //<img class='bbanchor' src='../brokenBooks/images/anchor.png'/>
            metadata3.element("value", "http://ds.lib.berkeley.edu/VFLMS002_44");
            a_metadata.add(metadata1);
            a_metadata.add(metadata2);
            a_metadata.add(metadata3);
        }
        else if(username.equals("lisa")){
            ranges = getAnnoByProperties("{\"@type\":\"sc:Range\",\"forProject\":\"broken_books_lisa\"}");
            JSONObject metadata1 = new JSONObject();
            JSONObject metadata2 = new JSONObject();
            JSONObject metadata3 = new JSONObject();
            metadata1.element("label", "Title");
            metadata1.element("value", "Beauvais Missal Reconstruction");
            metadata2.element("label", "Created By");
            metadata2.element("value", "Lisa Fagin Davis");
            metadata3.element("label", "Anchor Object");
            metadata3.element("value", "http://ds.lib.berkeley.edu/Ege15_40");
            a_metadata.add(metadata1);
            a_metadata.add(metadata2);
            a_metadata.add(metadata3);
        }
        JSONArray ja_ranges = JSONArray.fromObject(ranges);
        //get cavanses
        //get cavanses
        JSONArray ja_canvases;
        JSONArray ja_sequences = new JSONArray();
        JSONObject jo_sequence = new JSONObject();
        jo_sequence.element("@id", "http://165.134.241.141/brokenBooks/sequence/normal");
        jo_sequence.element("@type", "sc:Sequence");
        JSONObject rv = new JSONObject();
        String canvases = "";
        if(username.equals("debra")){
            canvases = getAnnoByProperties("{\"@type\":\"sc:Canvas\",\"forProject\":\"broken_books_debra\"}");
            jo_sequence.element("label", "Llangattock Canvases");
            rv.element("label", "Llangattock Breviary");
        }else if(username.equals("lisa")){
            canvases = getAnnoByProperties("{\"@type\":\"sc:Canvas\",\"forProject\":\"broken_books_lisa\"}");
            jo_sequence.element("label", "Beauvais Missal Canvases");
            rv.element("label", "Beauvais Missal");
        }
        if(null != canvases && "" != canvases){
            ja_canvases  = JSONArray.fromObject(canvases);
            jo_sequence.element("canvases", ja_canvases);
        }else{
            ja_canvases = new JSONArray();
            jo_sequence.element("canvases", ja_canvases);
        }
        ja_sequences.add(jo_sequence);
        rv.element("@id", url);
        rv.element("@context", context);
        rv.element("@type", type);
        rv.element("metadata", a_metadata);
        rv.element("structures", ja_ranges);
        //the canvases need to go into the first object of this array
        rv.element("sequences", ja_sequences);
        
        response.getWriter().print(rv.toString());
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }
    
    private String getAnnoByProperties(String properties){
        StringBuilder sb = new StringBuilder();
        try {
            URL postUrl = new URL(Constant.ANNOTATION_SERVER_ADDR + "/anno/getAnnotationByProperties.action");
            HttpURLConnection connection = (HttpURLConnection) postUrl.openConnection();
            connection.setDoOutput(true);
            connection.setDoInput(true);
            connection.setRequestMethod("POST");
            connection.setUseCaches(false);
            connection.setInstanceFollowRedirects(true);
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            connection.connect();
            DataOutputStream out = new DataOutputStream(connection.getOutputStream());
            //value to save
            out.writeBytes("content=" + URLEncoder.encode(properties, "utf-8"));
            out.flush();
            out.close(); // flush and close
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(),"utf-8"));
            String line="";
            while ((line = reader.readLine()) != null){
                //line = new String(line.getBytes(), "utf-8");
                sb.append(line);
            }
            reader.close();
            connection.disconnect();
        } catch (MalformedURLException ex) {
            Logger.getLogger(GetManifestServlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ProtocolException ex) {
            Logger.getLogger(GetManifestServlet.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(GetManifestServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        return sb.toString();
    }
       
}
