const AddActivityAPI = async (path, name, description, date, location, MaxMembers ) => {
    console.log(path + "/Activity/AddActivity?name=" + name + "&description=" + description + "&date=" + date + "&location=" + location + "&MaxMembers=" + MaxMembers)
    let res = await
        fetch(path + "/Activity/AddActivity?name=" + name + "&description=" + description + "&date=" + date + "&location=" + location + "&MaxMembers=" + MaxMembers, {
            method: "POST",
            headers: { 
                        "Access-Control-Allow-Origin": "*"
                    }
        });
        
    console.log(res.status)
    return res.status;
}

export default AddActivityAPI;