let count = 1
let numPost = 1
let descriptions = [

    " :Hello! this is my first post so please know that this will be written as best I can but will probably still be poor cause my writing skills are bad",
    "Hello This is post numro dos"






]
let content = ''
let post
while (count <= numPost) {
    console.log(count)
    post = 'post' + count
    content += '<a href="Posts/' + post + '.html">Post ' + count + '</a>' + descriptions[count - 1] + '<br><br><br>'
    count++
}

document.getElementById('mainText').innerHTML = content

