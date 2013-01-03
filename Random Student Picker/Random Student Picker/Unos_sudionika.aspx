<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Unos_sudionika.aspx.cs" Inherits="Random_Student_Picker.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Random Student Picker</title>
    <style type="text/css">
        .style2
        {
            font-size: large;
        }
        .style3
        {
            height: 110px;
        }
        .style4
        {
            font-size: x-large;
        }
        .style5
        {
            font-size: x-large;
            height: 49px;
        }
        .style6
        {
            height: 49px;
        }
        .style7
        {
            font-size: small;
        }
    </style>
</head>
<body style="font-family:Franklin Gothic Book;">
    <form id="form1" runat="server">
    <div style="margin:0 auto;width:100%">
        <center>
        <div id="header">
            <a href="Unos_sudionika.aspx" title="Idi na unos sudionika" ><img src="msp_logo.jpg" alt="MSP logo" /></a><br />
            <br />
        </div>
        <div id="wrap">
        <h1 style="font-family:Franklin Gothic Book;">Unos sudionika </h1>
            <br />
        <table style="height: 371px; width: 479px">
        <tr>
        <td align="center" class="style4">IME</td><td>
            <asp:TextBox ID="txt_ime" runat="server" 
                    Width="215px" Height="34px" Font-Size="Large"></asp:TextBox></td>
        </tr>
        <tr>
        <td align="center" class="style4">PREZIME</td><td>
            <asp:TextBox ID="txt_prezime" runat="server" 
                    Width="215px" Height="34px" Font-Size="Large"></asp:TextBox></td>
        </tr>
        <tr>
        <td align="center" class="style5">NAPOMENA</td><td class="style6">
            <asp:TextBox ID="txt_napomena" runat="server" 
                Width="215px" Height="34px" 
                    Font-Size="Large"></asp:TextBox></td>
        </tr>
        <tr>
        <td class="style3" colspan="2" align="center">
            <asp:Button ID="btn_unesi" runat="server" 
                Text="Unesi" Width="383px" 
                    Height="42px" Font-Size="Large" onclick="btn_unesi_Click" 
                Font-Underline="False" ForeColor="Black" />
            <br />
            <br />
            <span class="style7"><i>Nakon unosa svih sudionika</i></span><br />
            <asp:Button ID="btn_save_xml" runat="server" onclick="btn_save_xml_Click" 
                Text="Potvrdi spremanje u XML" Width="159px" />
            </td>
        </tr>
        <tr>
        <td colspan="2" align="center"><asp:Label ID="lbl_error" runat="server" ForeColor="Red" Font-Size="Medium"></asp:Label></td>
        </tr>
        </table>
         <p style="padding-top:50px;width: 514px; height: 57px" class="style2">
            <asp:LinkButton ID="lb_izbor_pobjednika" runat="server" 
                onclick="lb_izbor_pobjednika_Click" Font-Underline="False" 
                ForeColor="Black">Izbor pobjednika</asp:LinkButton>
            <span style="padding-left:50px;">
                <asp:LinkButton ID="lb_lista_sudionika" runat="server" 
                 PostBackUrl="~/Lista_sudionika.aspx" Font-Underline="False" 
                 ForeColor="Black" Enabled="False" >Lista sudionika</asp:LinkButton>
            </span>
         </p>
        </div>
        </center>
    </div>
    
    </form>
</body>
</html>
