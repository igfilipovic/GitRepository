<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lista_studenta.aspx.cs" Inherits="Random_Student_Picker.Lista_studenata" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <br />
    <center>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:baza_studenta %>" 
            SelectCommand="SELECT * FROM [student]"></asp:SqlDataSource>
        <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
            AllowSorting="True" AutoGenerateColumns="False" CellPadding="4" 
            DataKeyNames="id_stud" DataSourceID="SqlDataSource1" ForeColor="#333333" 
            GridLines="None" Height="181px" Width="1150px">
            <AlternatingRowStyle BackColor="White" />
            <Columns>
                <asp:BoundField DataField="id_stud" HeaderText="ID studenta" 
                    InsertVisible="False" ReadOnly="True" SortExpression="id_stud">
                <HeaderStyle Width="100px" />
                </asp:BoundField>
                <asp:BoundField DataField="ime" HeaderText="Ime" HtmlEncode="False" 
                    SortExpression="ime">
                <HeaderStyle Width="250px" />
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="prezime" HeaderText="Prezime" 
                    SortExpression="prezime">
                <HeaderStyle Width="250px" />
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="napomena" HeaderText="Napomena" 
                    SortExpression="napomena">
                <HeaderStyle Width="500px" />
                </asp:BoundField>
            </Columns>
            <EditRowStyle BackColor="#2461BF" />
            <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
            <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
            <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
            <RowStyle BackColor="#EFF3FB" />
            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
            <SortedAscendingCellStyle BackColor="#F5F7FB" />
            <SortedAscendingHeaderStyle BackColor="#6D95E1" />
            <SortedDescendingCellStyle BackColor="#E9EBEF" />
            <SortedDescendingHeaderStyle BackColor="#4870BE" />
        </asp:GridView>
        <p>
        <a href="Unos_studenta.aspx" title="Unos studenta" style="text-decoration:none;font-size:30px;color:#000;">Unos studenta</a>
        </p>
    </center>
    </div>
    </form>
</body>
</html>
