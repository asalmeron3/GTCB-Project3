$.ajax({
         url: "https://api.propublica.org/congress/v1/members/senate/RI/current.json",
         type: "GET",
         dataType: 'json',
         headers: {'X-API-Key': 'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}
       }).done(function(data){
       console.log(data)
       });