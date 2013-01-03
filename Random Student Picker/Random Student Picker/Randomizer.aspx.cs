using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using System.Data.SqlClient; ODKOMENTIRATI ZA SQL SERVER
using System.Xml;
using System.Threading;

namespace Random_Student_Picker
{
    
    public partial class Randomizer : System.Web.UI.Page
    {
        
        /// <summary>
        /// Hidden labeli i fokus na button za izbor pobjednika
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            lbl_pobjednik.Visible = false;
            lbl_sudionik.Visible = false;
            btn_pick.Focus();
            string date = DateTime.Now.ToShortDateString();
            List<string> pobjednik = new List<string>();
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml"));

            XmlNodeList dataNodes = xmlDoc.SelectNodes("/Sudionici/Sudionik");
            foreach (XmlNode node in dataNodes)
            {
                lbl_sudionik.Text=(node.SelectSingleNode("Ime").InnerText + " " + node.SelectSingleNode("Prezime").InnerText);
            }
          
        }
        /// <summary>
        /// Pod komentarom kod za SQL server
        /// Citanje XML datoteke, poziv Randomize funkcije te prikaz pobjednika
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void btn_pick_Click(object sender, EventArgs e)
        {
            //SqlConnection c = new SqlConnection(System.Web.Configuration.WebConfigurationManager.ConnectionStrings["baza_studenta"].ConnectionString);
            //c.Open();
            //SqlCommand comm = new SqlCommand("select top 1 ime,prezime from student order by newid()",c);
            //SqlDataReader sdr = comm.ExecuteReader();
            //if (!sdr.Read())
            //    lbl_error.Visible = true;
            //else
            //{
            //    lbl_pobjednik.Visible = true;
            //    lbl_student.Text = sdr["ime"].ToString() + " " + sdr["prezime"].ToString();
            //}
            //c.Close();
            List<string> pobjednik = new List<string>();
            string date = DateTime.Now.ToShortDateString();
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml"));

            XmlNodeList dataNodes = xmlDoc.SelectNodes("/Sudionici/Sudionik");
            foreach (XmlNode node in dataNodes)
            {
                pobjednik.Add(node.SelectSingleNode("Ime").InnerText + " " + node.SelectSingleNode("Prezime").InnerText);
            }

            pobjednik = Randomize<string>(pobjednik);
            lbl_sudionik.Text = pobjednik[0].ToString();
            lbl_sudionik.Visible = true;
            lbl_pobjednik.Visible = true;
        }
        /// <summary>
        /// Randomiziranje redoslijeda liste sudionika
        /// </summary>
        /// <typeparam name="T">String</typeparam>
        /// <param name="list">Lista sudionika</param>
        /// <returns>Randomiziranu listu sudionika</returns>
        public static List<T> Randomize<T>(List<T> list)
        {
            List<T> randomizedList = new List<T>();
            Random rnd = new Random();
            while (list.Count > 0)
            {
                int index = rnd.Next(0, list.Count); //pick a random item from the master list
                randomizedList.Add(list[index]); //place it at the end of the randomized list
                list.RemoveAt(index);
            }
            return randomizedList;
        }
    }
}