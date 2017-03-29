using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace LearnAngular
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class employeeservice : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployees()
        {
            var EmployessList = new List<Employee>();
            var connstr = ConfigurationManager.ConnectionStrings["DBConn"].ConnectionString;
            using (SqlConnection sq = new SqlConnection(connstr))
            {
                sq.Open();
                SqlCommand cmd = new SqlCommand("select * from tblemployee", sq);
                var sqlreader = cmd.ExecuteReader();
                while (sqlreader.Read())
                {
                    Employee emp = new Employee();
                    emp.employeeid = (int)sqlreader["employeeid"];
                    emp.name = sqlreader["name"].ToString();
                    emp.gender = sqlreader["gender"].ToString();
                    emp.city = sqlreader["city"].ToString();
                    emp.deptid = sqlreader["deptid"].ToString();
                    EmployessList.Add(emp);
                }
            }
            var sqlsr = new JavaScriptSerializer();
            Context.Response.Write(sqlsr.Serialize(EmployessList));
        }
    }
}
