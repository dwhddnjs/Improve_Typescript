"use strict";
//Urillty Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "asdasdasd",
    title: "final project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// 프로퍼티 업데이트 할때 쓴다?
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hex = {
    red: "",
    green: "",
};
const grade = {
    sara: "B",
    kelly: "C",
};
const gradeData = {
    sara: { assign1: 10, assign2: 20 },
    kelly: { assign1: 10, assign2: 20 },
};
const score = {
    studentId: "adsadsdsa",
    grade: 85,
};
const score2 = {
    studentId: "adsadsdsa",
    title: "adsadas",
};
//return Type
// type newAssign = { title: string; points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("adsdsaasd", 100);
const assignArgs = ["asdasdad", 1000];
const tsAssign2 = createNewAssign(...assignArgs);
