// eic => expense item component 
const expense_item_styles = {
    eic_container: {
        classes: [
            "text-violet-900", 
            "text-sm"
        ],
    }
}

const CreateClass = (element) => {
    return (expense_item_styles[element].classes).join(' ')
}

const eic_container_class = CreateClass('eic_container')

export default eic_container_class
