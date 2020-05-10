// Typescript
interface Response {
   token: string;
   user: {
      name: string;
      email: string;
   };
}

export default function login(): Promise<Response> {

   // Recreate an API call to get a logged user
   return new Promise(resolve => {
      setTimeout(() => {
         resolve({
            token: 'ka68lwecj0ejc98rj9e8rh49kdjfou977897we8wf9we8f79we8f98ef',
            user: {
               name: 'Mauricio',
               email: 'mauriciopachecoc@gmail.com',
            },
         })
      }, 1500);
   });

}