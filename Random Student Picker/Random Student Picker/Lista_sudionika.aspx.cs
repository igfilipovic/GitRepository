using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using System.Data.SqlClient; ODKOMENTIRATI ZA SQL SERVER
using System.Xml;
using System.Data;
using System.Text;
using System.IO;

namespace Random_Student_Picker
{
    public partial class Lista_sudionika : System.Web.UI.Page
    {
        /// <summary>
        /// Izrada tablice iz XML datoteke
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            bool parni = false;
            string date = DateTime.Now.ToShortDateString();
            StringBuilder sb = new StringBuilder();
            lbl_datum.Text = date;
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml"));

            XmlNodeList dataNodes = xmlDoc.SelectNodes("/Sudionici/Sudionik");
            
            sb.Append("<table border='1' cellpadding='0' cellspacing='0' style='width:90%;font: 20px Verdana;'>");
            sb.Append("<tr><td align='center' style='width:10%'>ID SUDIONIKA</td><td align='center' style='width:15%'>IME</td><td align='center' style='width:25%'>PREZIME</td><td align='center' style='width:50%'>NAPOMENA</td></tr>");
            foreach (XmlNode node in dataNodes)
            {
                if (parni)
                {
                    sb.Append("<tr>");
                    parni = false;
                }
                else
                {
                    sb.Append("<tr style='background-color:#ccc;'>");
                    parni = true;
                }
               
                int id = Convert.ToInt32(node.SelectSingleNode("Id_sud").InnerText);
                sb.Append("<td align='center'>" + id + "</td>");
                string ime = node.SelectSingleNode("Ime").InnerText;
                sb.Append("<td align='center'>" + ime + "</td>");
                string prezime = node.SelectSingleNode("Prezime").InnerText;
                sb.Append("<td align='center'>" + prezime + "</td>");
                string napomena = node.SelectSingleNode("Napomena").InnerText;
                sb.Append("<td align='center'>" + napomena + "</td>");
                sb.Append("</tr>");
            }
            sb.Append("</Table>");
            ltl_xmldata.Text = sb.ToString();
        }
        /// <summary>
        /// SQL brisanje tablice - ovo je dodatak za SQL upotrebu
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void btn_da_Click(object sender, EventArgs e)
        {
            //SqlConnection c = new SqlConnection(System.Web.Configuration.WebConfigurationManager.ConnectionStrings["baza_studenta"].ConnectionString);
            //SqlCommand comm = new SqlCommand("delete from student", c);
            //c.Open();
            //comm.ExecuteNonQuery();
            //c.Close();
            //GridView1.DataBind(); 
        }
        protected void btn_ne_Click(object sender, EventArgs e)
        {
            Response.Redirect("Lista_sudionika.aspx");
        }
    }
}