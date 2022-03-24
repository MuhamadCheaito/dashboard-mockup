import client from './api'

class SearchService {
    
    static async search(query){
        
        let data;
        
        await client.post('/search',{
            'q': query
        }).then(res => data = res.data)
          .catch(err => console.log(err));
          
        return data;
    }
}

export default SearchService;