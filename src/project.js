import List from './list.js'

export default class Projects {
    constructor() {
        this.projects = []
    }

    add (name) {
        let list = new List(name)
        this.projects.push( list )
    }

    remove (index) {
        this.projects.splice(index, 1)
    }

    getProject (index) {
        return this.projects[index]
    }
}

//logic for projects is just a list with variation on the add feature
//is there a way to combine this into one?