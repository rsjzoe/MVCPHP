const availableLabel = {
    yes: "disponible",
    no: "indisponible",
};
export const availableOptions = [
    { value: true, label: availableLabel.yes },
    { value: false, label: availableLabel.no },
];
export const availableToOption = (value: boolean) => {
    if (value == null) return null;
    return value == true ? availableOptions[0] : availableOptions[1];
};
