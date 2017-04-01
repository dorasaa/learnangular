using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace LearnAngular
{
    /// <summary>
    /// Summary description for CountryCityList
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class CountryCityList : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetCountriesAndCities()
        {
            var CountryList = new List<country>();
            var connstr = System.Configuration.ConfigurationManager.ConnectionStrings["DBConn_SatDb"].ConnectionString;
            using (SqlConnection sq = new SqlConnection(connstr))
            {
                sq.Open();
                SqlCommand cmd = new SqlCommand("select * from tbl_country;select * from tblcity;", sq);
                SqlDataAdapter sqlda = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                sqlda.Fill(ds);
                DataView dv = new DataView(ds.Tables[1]);
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    country cntry = new country();
                    cntry.id =Convert.ToInt16(dr["countryid"]);
                    cntry.name = dr["countryname"].ToString();
                    dv.RowFilter = "countryid='" + cntry.id + "'";

                    List<City> citylist = new List<City>();
                    foreach (DataRowView drview in dv) {
                        City cty = new City();
                        cty.id = (int)drview["id"];
                        cty.name = drview["name"].ToString();
                        cty.countryid = (int)drview["countryid"];
                        citylist.Add(cty);
                    }
                    cntry.citylist = citylist;
                    CountryList.Add(cntry);
                }
                
                 
            }
            var sqlsr = new JavaScriptSerializer();
            Context.Response.Write(sqlsr.Serialize(CountryList));
        }
    }
}
