<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Unos_studenta.aspx.cs" Inherits="Random_Student_Picker.WebForm1" %>

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
            height: 68px;
        }
        .style4
        {
            font-size: x-large;
        }
    </style>
</head>
<body style="font-family:Franklin Gothic Book;">
    <form id="form1" runat="server">
    <div style="margin:0 auto;width:100%">
        <center>
        <div id="header">
            <img src="msp_logo.jpg" alt="MSP logo" />
            <br />
            <br />
            <br />
        </div>
        <div id="wrap">
        <h1 style="font-family:Franklin Gothic Book;">Unos studenta </h1>
            <p style="font-family:Franklin Gothic Book;">&nbsp;</p>
            <p style="font-family:Franklin Gothic Book;">&nbsp;</p><br />
        <table style="height: 318px; width: 470px">
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
        <td align="center" class="style4">NAPOMENA</td><td>
            <asp:TextBox ID="txt_napomena" runat="server" 
                Width="215px" Height="34px" 
                    Font-Size="Large"></asp:TextBox></td>
        </tr>
        <tr>
        <td class="style3" colspan="2" align="center">
            <asp:Button ID="btn_unesi" runat="server" 
                Text="Unesi" Width="325px" 
                    Height="42px" Font-Size="Large" onclick="btn_unesi_Click" /></td>
        </tr>
        <tr>
        <td colspan="2"><asp:Label ID="lbl_error" runat="server" ForeColor="Red" Font-Size="Medium"></asp:Label></td>
        </tr>
        </table>
         <p style="padding-top:50px;width: 514px; height: 57px" class="style2">
                <a href="Randomizer.aspx" title="Izbor studenta" style="text-decoration:none;color:#000;">Izbor pobjednika</a>
                 <a href="Lista_studenta.aspx" title="Lista studenta" style="padding-left:50px;text-decoration:none;color:#000;">Lista studenta</a>
         </p>
         
               
         
        </div>
        </center>
    </div>
    
    </form>
</body>
</html>
