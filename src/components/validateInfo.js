export default function validateInfo(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = "Name is required."
    }

    if (!values.email.trim()) {
        errors.email = "Email is required."
    } else if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/i.test(values.email)) {
        errors.email = "Email is invalid."
    }

    if (!values.message.trim()) {
        errors.message = "Message is required."
    }

    return errors;
}