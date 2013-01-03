using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using System.Data.SqlClient; ODKOMENTIRATI ZA SQL SERVER
using System.Data;
using System.Xml;

namespace Random_Student_Picker
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        private static List<int> id_sud = new List<int>();
        private static List<string> ime = new List<string>();
        private static List<string> prezime = new List<string>();
        private static List<string> napomena = new List<string>();
        private static int id = 0;
        private string date = DateTime.Now.ToShortDateString();
        private static bool xml_exists = false;
       
        protected void Page_Load(object sender, EventArgs e)
        {
            xml_exists = false;
            lbl_error.Visible = false;
            txt_ime.Focus();
            if (System.IO.File.Exists(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml")))
            {
                xml_exists = true;
                lb_lista_sudionika.Enabled = true;
            }
        }
        /// <summary>
        /// Upis sudionika u genericku listu
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void btn_unesi_Click(object sender, EventArgs e)
        {
            if (txt_ime.Text != "" && txt_prezime.Text != "")
            {
                if (xml_exists)
                {
                    XmlDocument xmlDoc = new XmlDocument();
                    xmlDoc.Load(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml"));
                    XmlNodeList dataNodes = xmlDoc.SelectNodes("/Sudionici/Sudionik");
                    foreach (XmlNode node in dataNodes)
                    {
                        id_sud.Add(Convert.ToInt32(node.SelectSingleNode("Id_sud").InnerText));
                        ime.Add(node.SelectSingleNode("Ime").InnerText);
                        prezime.Add(node.SelectSingleNode("Prezime").InnerText);
                        napomena.Add(node.SelectSingleNode("Napomena").InnerText);
                    }
                    id = id_sud[id_sud.Count - 1];
                }
                ++id;
                id_sud.Add(id);
                ime.Add(txt_ime.Text.ToUpper());
                prezime.Add(txt_prezime.Text.ToUpper());
                napomena.Add(txt_napomena.Text.ToUpper());
                lbl_error.Text = "Sudionik je uspješno pohranjen.";
                lbl_error.Visible = true;
                //SqlConnection c = new SqlConnection(System.Web.Configuration.WebConfigurationManager.ConnectionStrings["baza_studenta"].ConnectionString);
                //SqlCommand comm = new SqlCommand("insert into student values (@ime,@prezime,@napomena)", c);
                //c.Open();
                //comm.Parameters.AddWithValue("@ime", txt_ime.Text.ToUpper());
                //comm.Parameters.AddWithValue("@prezime", txt_prezime.Text.ToUpper());
                //comm.Parameters.AddWithValue("@napomena", txt_napomena.Text.ToUpper());
                //if (comm.ExecuteNonQuery() == 0)
                //{
                //    lbl_error.Text = "Unos studenta nije uspio. Pokušajte ponovo.";
                //}
                //c.Close();
                txt_ime.Text = "";
                txt_prezime.Text = "";
                txt_napomena.Text = "";
            }
            else
            {
                lbl_error.Text = "Unesite ime i prezime sudionika.";
                lbl_error.Visible = true;
            }
            
        }
        /// <summary>
        /// Izrada XML datoteke
        /// </summary>
        /// <param name="id_sud">ID sudionika</param>
        /// <param name="ime">Ime sudionika</param>
        /// <param name="prezime">Prezime sudionika</param>
        /// <param name="napomena">Dodatno polje za opis</param>
        /// <param name="date">Danasnji dan</param>
        private void SaveToXml(List<int> id_sud, List<string> ime, List<string> prezime, List<string> napomena, string date)
        {
            XmlWriterSettings settings = new XmlWriterSettings();
            settings.Indent = true;
            settings.IndentChars = "  ";
            settings.NewLineOnAttributes = true;
            settings.ConformanceLevel = ConformanceLevel.Fragment;
            XmlWriter writer = XmlWriter.Create(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data/baza_sudionika" + date + ".xml"));
            writer.WriteComment("Microsoft Student Partner");
            writer.WriteComment("Datum:" + date);
            writer.WriteStartElement("Sudionici");
            for (int i = 0; i < id_sud.Count; ++i)
            {
                writer.WriteStartElement("Sudionik");
                writer.WriteElementString("Id_sud",id_sud[i].ToString());
                writer.WriteElementString("Ime", ime[i]);
                writer.WriteElementString("Prezime", prezime[i]);
                writer.WriteElementString("Napomena", napomena[i]);
                writer.WriteEndElement();
            }
            writer.WriteEndElement();
            writer.Close();
            writer.Flush();

            id_sud.Clear();
            ime.Clear();
            prezime.Clear();
            napomena.Clear();
        }
        /// <summary>
        /// Ciscenje inputa
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void btn_ocisti_Click(object sender, EventArgs e)
        {
            txt_ime.Text = "";
            txt_prezime.Text = "";
            txt_napomena.Text = "";
        }
        /// <summary>
        /// Okidac zapisivanja u XML datoteku
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void lb_izbor_pobjednika_Click(object sender, EventArgs e)
        {
            if (xml_exists)
                Response.Redirect("randomizer.aspx");
            else
            {
                lbl_error.Text = "Baza sudionika je prazna! Unesite sudionike prvo.";
                lbl_error.Visible = true;
            }
        }

        protected void btn_save_xml_Click(object sender, EventArgs e)
        {
            if (id_sud.Count > 1)
            {
                SaveToXml(id_sud, ime, prezime, napomena, date);
            }
            else
            {
                lbl_error.Text = "Unesite barem dva sudionika.";
                lbl_error.Visible = true;
            }
        }
    }
}