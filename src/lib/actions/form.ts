

export const enhance = (form: HTMLFormElement, {result}) => {
    console.log('form mounted to dom');

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const body = new FormData(form);
        try{
           const res = await fetch(form.action, {
                method: form.method,
                body,
                headers:{
                    accept: 'application/json'
                }
                });
            if (res.ok){
                result(res,form);
            }
            else{
                console.error('fetch error', await res.text());
               
            }
        }
        catch(error){
            console.error(`could not submit the form, error: ${error}`);
        }
            
        }
    
    form.addEventListener('submit',handleSubmit);
    
    return {
        destroy(){
            console.log('form unmounted from dom');
        }
    }
};