<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lista_sudionika.aspx.cs" Inherits="Random_Student_Picker.Lista_sudionika" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript">	
    function confirm() 
    {
        if (confirm == true)
            return true;
        else
            return false;

    }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
     <center>
    <a href="Unos_sudionika.aspx" title="Idi na unos sudionika"><img src="msp_logo.jpg" alt="MSP logo" /></a><br />
         <br />
         <asp:Label ID="lbl_datum" runat="server" Font-Size="XX-Large"></asp:Label>
         <br />
    <br />
         <asp:Literal ID="ltl_xmldata" runat="server"></asp:Literal>
    </center>
    </div>
    </form>
</body>
</html>
