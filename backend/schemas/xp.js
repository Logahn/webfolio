export default {
    name:'xp',
    title:'XP',
    type: 'document',
    fields:[
        { 
            name:'position',
            title:'Position',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'date',
            title:'Date',
            type:'string'
        },

        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'string'
             }
           ]
          },
    ]
}
