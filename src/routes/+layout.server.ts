export const load = async ({ locals }) => {
console.log("LOcals", locals);

    return {
        session: locals
    };
};