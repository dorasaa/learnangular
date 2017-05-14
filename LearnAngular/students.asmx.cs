using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace LearnAngular
{
    /// <summary>
    /// Summary description for students
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class students : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetStudents()
        {
            var StudentList= new List<student>();
            var connstr = System.Configuration.ConfigurationManager.ConnectionStrings["DBConn"].ConnectionString;
            using (SqlConnection sq = new SqlConnection(connstr))
            {
                sq.Open();
                SqlCommand cmd = new SqlCommand("select * from tblstudents", sq);
                var sqlreader = cmd.ExecuteReader();
                while (sqlreader.Read())
                {
                    student st = new student();
                    st.id = (int)sqlreader["id"];
                    st.name = sqlreader["name"].ToString();
                    st.gender = sqlreader["gender"].ToString();
                    st.city = sqlreader["city"].ToString();
                    
                    StudentList.Add(st);
                }
            }
            var sqlsr = new JavaScriptSerializer();
            Context.Response.Write(sqlsr.Serialize(StudentList));
        }
    }
}
