
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const addTwo = x => x + 2;
const double = x => x * 2;

const composedFunc = compose(double, addTwo);
const pipeFunc = pipe(double, addTwo);

console.log(composedFunc(1));
console.log(pipeFunc(1));

const tasks = [
    addTwo,
    double
];

const composedTask = compose(...tasks);
const pipeTask = pipe(...tasks);

console.log(composedTask(3));
console.log(pipeTask(3));

class TaskPipeline {
    constructor() {
        this.tasks = [];
    }

    addTask(fn) {
        this.tasks.push(fn);
        return this;
    }

    compose(x) {
        return this.tasks.reduceRight((acc, fn) => fn(acc), x);
    }

    pipe(x) {
        return this.tasks.reduce((acc, fn) => fn(acc), x);
    }
}

const pipeline = new TaskPipeline();
pipeline.addTask(addTwo).addTask(double);

console.log(pipeline.compose(3));
console.log(pipeline.pipe(3));