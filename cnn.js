const math=require('mathjs');


const v_pic=[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];

let kernel=[[-2,-1,0],[-1,1,1],[0,1,2]];
let conv=[];
for(let i=0; i<v_pic[0].length-kernel[0].length+1; i++){
    conv.push([]);
}
kernel=flip(kernel);
pad(v_pic,kernel);
// for (let i =0; i<v_pic.length; i++){
//     for(let j=0; j<v_pic[i].length; j++){
//         for (let m =0; m<v_pic.length; m++){
//             for(let n=0; n<v_pic[i].length; n++){
//         conv=sum(sum(v_pic[i][j]*kernel[m][n]))
// }
// console.log(conv);


console.log(kernel);

function flip(matrix){
    let flipped=[];
    for(let i=0; i<matrix[0].length; i++){
        flipped.push([]);
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            flipped[i][j]=matrix[matrix.length-i-1][matrix[i].length-j-1];
        }
    }
    return flipped;
}


function pad(pic,kernel){
    let kernel_height=kernel.length;
    let kernel_width=kernel[0].length;


    let pad_x=((num)=>{
        num=pic[0].length;

        if(num%kernel_width==0&&num%2==0){
            return num;
        }else{
            while(num%kernel_width!=0&&num%2!=0){
                num++;
            }
        }
        return num;
    })();

    let pad_y=((num)=>{
        num=pic.length;

        if(num%kernel_height==0&&num%2==0){
            return num;
        }else{
            while(num%kernel_height!=0&&num%2!=0){
                num++;
            }
        }
        return num;
    })();

    console.log(pad_x,pad_y);


}