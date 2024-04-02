export default function dataBase() {

    const getData = (dataName) => {
        let data;
        
        if(!localStorage.getItem(dataName)) {
            data = []
            saveData(dataName, data)
        } else {
            data = JSON.parse(localStorage.getItem(dataName))
        }
    
        return data
    }

    const saveData = (dataName, data) => {
        localStorage.setItem(dataName, JSON.stringify(data))
    }

    const deleteData = (dataName) => {
        localStorage.removeItem(dataName)
    }

    return {getData, saveData, deleteData}

}