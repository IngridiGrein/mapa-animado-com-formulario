$(document).ready(function() {
	  // initialize table
    var t = $('#example').DataTable({
        paging:   false,
        bFilter: false, 
        bInfo: false,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]   
    });

    
 		// add row
    $('#addRow').click(function () {
        //t.row.add( [1,2,3] ).draw();
        var rowHtml = '<tr><td>'+$("#newRow").find("tr td input")[0].value+'</td><td>'+$("#newRow").find("tr td input")[1].value+'</td><td>'+$("#newRow").find("tr td input")[2].value+'</td></tr>';
        console.log(rowHtml);
        t.row.add($(rowHtml)).draw();
    });
 
});