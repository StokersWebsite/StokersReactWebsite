const ActivityAPI = async (path) => {
    let res = await
        fetch(path + "/Activity/GetActivities", {
            method: "GET",
            headers: { 
                        "Access-Control-Allow-Origin": "*"
                    }
        });
    return res.json();
}

export default ActivityAPI;