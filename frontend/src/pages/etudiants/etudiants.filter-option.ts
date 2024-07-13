const classes = {
  classe1: "classe 1",
  classe2: "classe 2",
};
export const classesOptions = [
  { value: classes.classe1, label: classes.classe1 },
  { value: classes.classe2, label: classes.classe2 },
];
export const classesToOption = (value: string) => {
    if (value == null) return null;
    if (value == "classe1") return classes[0];
    if (value == "classe2") return classes[1];
};
