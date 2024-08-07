console.log("JavaScript file is linked and working")
fetch('data.json')
    .then(Response => Response.json)
    .then(data => {
        console.log("Data fetched successfully:", data);
        data.forEach(record => {
            console.log('Name: ${record.name}');
        });
    })
    .catch(error => console.error("Error fetching data:", error));
    
    function getAllNames(data){
        return data.map(record => record.name).join(", ");
    }
    function getAverageAge(data){
        let totalAge = data.reduce((sum, record) =>sum+record.age,0);
        return totalAge / data.length;
    }
    function getUserById(data,id){
        let user = data.find(record => record.id === id);
        return user ? `User: ${user.name}, Age: ${user.age}` : `User with ID ${id} not found.`;
    }
    fetch('data.json')
        .then(response => response.json())
        .then(data =>{
            console.log("Data fetched successfully:", data);
            data.forEach(record => {
                console.log(`Name: ${record.name}`);
            });

            console.log("All Names: ", getAllNames(data));
            console.log("Average Age: ", getAverageAge(data));
            console.log(getUserById(data, 3)); // Example usage
        })
        .catch(error => console.error("Error fetching data: ", error));