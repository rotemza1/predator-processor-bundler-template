// import mydependency from 'mydependency';

export function myfunc(context, ee, next) {
    return next(); // MUST be called for the scenario to continue
}