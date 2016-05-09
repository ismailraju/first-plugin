

//////////////////////////////////////////////////////

	jQuery(document).ready(function($) {



/////////////////////////action function///////////////////////////////

function readCustomerInfoFunction() {

	console.log("addNewCustomerFunction()");

	var data  = {
		'action': 'my_action_customer_info'

	};



	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		dataType: "json",
		//dataType: "Array",
		data:data,
		success:function(response) {
				console.log(response);
				//alert(response);
				// $("#responsecontainer").html(response);



				var table_string='';

				table_string+="<thead> <tr>";
				
				table_string+=" <th>ID</th>";
				table_string+=" <th>Name</th>";
				table_string+=" <th>Phone</th>";
				table_string+=" <th>Email</th>";
				table_string+=" <th>Notes</th>";

				table_string+="</thead> </tr>";

				for(var i=0;i<response.length;i++){


					table_string+="<tr>";

					table_string+="<td align=center>";
					table_string+=response[i].id;
					table_string+="</td>";

					table_string+="<td align=center>";
					table_string+=response[i].name;
					table_string+="</td>";

					table_string+="<td align=center>";
					table_string+=response[i].phone;
					table_string+="</td>";

					table_string+="<td align=center>";
					table_string+=response[i].email;
					table_string+="</td>";

					table_string+="<td align=center>";
					table_string+=response[i].notes;
					table_string+="</td>";

					
					table_string+="</tr>";				      
			    }


				table_string+="</table>";

				$("#responsecontainer").html(table_string);


									

				}

		});

}


		$("#testBtn").click(function(){
				console.log("helo");

				readCustomerInfoFunction();
				$('#cust_table').DataTable();
        	
    	});

/////////////////////////element action///////////////////////////////

	});//end jQuery(document).ready(function($)



