package app;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

@Path("calculator")
public class Calculator {

    @Path("add")
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public Result add(@QueryParam("arg1") int arg1, @QueryParam("arg2") int arg2) {
        Result r = new Result();
        r.value = arg1 + arg2;
        return r;
    }

    @XmlRootElement
    public static class Result {
        public Integer value;
    }
}
