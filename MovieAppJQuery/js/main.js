$('#submit').on('click', function(e){
    e.preventDefault();
    
    const title = $('#title').val()
    const rating = $('#rating').val()
    
    let data = {title, rating}

    const appendableData = addToDom(data)

    $('tbody').append(appendableData)
    
    $('form').trigger('reset')
    // console.log(title, rating, data);
})


$('tbody').on('click','.del-btn', function(e){
$(e.target).closest('tr').remove()


})

function addToDom (data){
    return `
     <tr>
     <td>${data.title}</td>
     <td>${data.rating}</td>
     <td>
     <button class='del-btn'>Delete</button>
     </td>
    <tr>
    `
}