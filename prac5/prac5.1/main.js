var name = prompt('Input name','');
var major = prompt('Input major','');
var phone = prompt('Input phone','');
var visitcard = ' <TABLE width="100%" border="0">'
        +' <TR>'
        +' <TD align="CENTER" valign="CENTER">'
        +' <IMG src="logo.png">'
        +' </TD>'
        +' <TD align="CENTER">'
        +' <B>' + name + '</B><BR>'
        +' <I>' + major + '</I><BR>'
        +' <FONT color="blue">' + phone + '</FONT>'
        +' </TD>'
        +' </TR>'
        +' </TABLE>';

for (let i = 1; i<12; i++){
    document.write('<DIV >');
    for (let k = 0; k<3; k++) {
        document.write('<TABLE width="200" border="1">');

        document.write('<TR><TD align="CENTER">');
        document.write(' <TABLE width="100%" border="0">');
        document.write(' <TR>');
        document.write(' <TD align="CENTER" valign="CENTER">');
        document.write(' <img src ="logo.png">');
        document.write(' </TD>');
        document.write(' <TD align="CENTER">');
        document.write( name + '<BR>');
        document.write( major + ' <BR>');
        document.write( phone );
        document.write(' </TD>');
        document.write(' </TR>');
        document.write(' </TABLE>');
        document.write('</TD></TR>');
        document.write('</TABLE>');
    }
    document.write('</DIV>');
}