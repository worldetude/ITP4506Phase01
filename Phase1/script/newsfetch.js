fetch('./json/news.json')  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }
          // Examine the text in the response  
          response.json().then(function(data) {  

            data.news.forEach((index) => console.log(index));
            for (let i in data.news){
              document.getElementById("newsDesk").insertRow(3).insertCell().outerHTML = "<td><h3>"+data.news[i].title+"</h3></td>";
              document.getElementById("newsDesk").insertRow(4).insertCell().outerHTML = "<td><i>"+data.news[i].date+"</i></td>";
              document.getElementById("newsDesk").insertRow(5).insertCell().outerHTML = "<td>"+data.news[i].content+"</td>";
              document.getElementById("newsDesk").insertRow(6).insertCell().outerHTML = "<td>————————————————————</td>";
            }
          });  
        }  
      )