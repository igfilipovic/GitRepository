<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Randomizer.aspx.cs" Inherits="Random_Student_Picker.Randomizer" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .style1
        {
            height: 208px;
        }
        .style2
        {
            height: 101px;
        }
    </style>
</head>
<body>
<center>
    <form id="form1" runat="server">
    <div>
        <table>
            <tr>
                <td align="center">
                    <a href="Unos_studenta.aspx" ><img src="msp_logo.jpg" alt="MSP logo" /></a><br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
&nbsp;</td>
            </tr>
            <tr>
                <td class="style1" align="center">
                    <asp:Label ID="lbl_pobjednik" runat="server" Font-Size="40px" 
                        Text="SRETNI DOBITNIK JE:"></asp:Label>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <asp:Label ID="lbl_student" runat="server" Font-Size="90px"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style2" align="center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <asp:Button ID="btn_pick" runat="server" Text="Izaberi studenta" 
                        Font-Size="Large" Height="46px" onclick="btn_pick_Click" Width="227px" />
                </td>
            </tr>
        </table>
    
    </div>
    </form>
    </center>
</body>
</html>
