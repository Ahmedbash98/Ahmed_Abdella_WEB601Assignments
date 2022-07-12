import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  players:Content[];
  
  constructor() {
    this.players=[{
      id:0,
      name:"Cristion Ronaldo",
      position:"ST",
      age: 37,
      imageLink: "https://i.guim.co.uk/img/media/5194e5d243674ac838e4e0c019a91d159d694192/280_111_2931_1759/master/2931.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c16b57f44e75b88dc5758321810eac15",
      nationality: "Portuguese",
      hashtags: ["CR7", "The Goat"]
      
    },{
      id:1,
      name: "Mohamed Salah",
      position: "RW",
      age: 29,
      imageLink: "https://phantom-marca.unidadeditorial.es/abcedd739f87a9acef008d1b84c48437/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/13/16524224307217.jpg",
      nationality: "Egypt",
      hashtags: undefined
    },{
      id:2,
      name: "Alphonso Davies",
      position: "LB",
      age: 21,
      imageLink: "https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1644688785/cms/public/images/fcbayern-com/homepage/saison-21-22/Profis/Davies/220212_Davies_GET.jpg",
      nationality: "Canada",
      hashtags: undefined
    },{
      id:3,
      name: "Lionel Messi",
      position: "RW",
      age: 34,
      imageLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVEBAWEBUQFQ8QFQ8PDw8QFRUWFxYRFRUYHSggGBolGxUVITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OGhAQGi0dHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABEEAABBAAEAwUEBQgIBwAAAAABAAIDEQQSITEFQVEGEyJhcTKBkbEHFFKh0UJicoKSweHwFiMzQ3OywvEIFTREU2Oi/8QAGwEAAwEBAQEBAAAAAAAAAAAAAQIDAAQFBgf/xAAyEQACAgECAwcDBAICAwAAAAAAAQIRAxIhMUFRBBNhcYGR8CKx0RQyocEF4QbxFSOy/9oADAMBAAIRAxEAPwAWPm0KqeGNBlvopcQmQOEyjMfVfosMenGz5fF9U0z0Xhhtqsod1RcEm5K7jdqvns8ak0exHgWbUuX6rZl0Sfe6rkjDiUYyUpizaMXpaYhUgtxWiOHpEnIS0TwjnVUa3sU1h91YQBJYduqsIQpZWFI3MVoLJd1to1U+QaGRsov2WOKyQaKQzQvaTxB1Tbgq/Eu1XRjVsRoquI7rke0DRYK6bicmq5Tj+Ia0W47a1zK9ns+SOFd5N0ktzlzQlk+iKtsrWtvZbEROwB9CCqSfiD3b6C/Yqx92/wB6r3YgDZwB+y22n1IpcOT/AJJ9X/rx2vF0/ZJ1/JWP+J2+qW/gtjqRGTsQfQ2rHgeHt9nkuG+tk7GvzgbHpXJXXBO0MgIGZuYWC2QXmIFg5r3Iv9k+q0P+RKSccmOvFO/dNL7vyC/8XVOMr8/yet8Pj0T4jXM9lu0kU7jFrFMP7uSgXaWS08+fnouqBUXkU/qi7RTS47MaiZoimJagKZXLKTsKQDutEqYtU6XoUiMZMzRX4rD2EnBBqrWfZJxDVdEJvSxGjJMKCEoINaVqTolK1RhORmgsMSZMGijEneSjObsZIrmxaovcojVILOTCjwrH44JLBcQp265+fHlyC3EFen/5qPBEsfYtKPXODcVGmq6RvERV2vEYONOaNN05H2nlqidFzz7Xim7ZdY2j2ccWaeaDJj9d15Jhe0rmnUlWQ7VtI13QWbCg6Wz1OLGgjdCkxS82h7X1pyTf9KWHUlFZMdgaZ2bcXRTjcWvO5+0zDsVLC9qRsSqueOQuk9Ej4hR1TbMffNefu480j2luLtQ1uhKWUMbDuehux3VZ9f8ANcGe0bXflLTu0rWj2kndYzWz0D6/5rZ4mF5o/tVegPvU4u0YG7llhx9TWehTcRFKrxXEPNcnJ2hB5pSfjN81bFixrmK7LjG427XEdsOJZXNbVksu+Qsnbz1Cfm4hZrlaqhww4ueOEmyHBpfzDQNQub/NZVHFDHHm7fpwXvv6FuyY3qb5/ko7keLDBR5kH9+5VtgeyHEJqqB4byMgy/C9vuXtXBOy8GGAysBeBo4gEj0/FX2HA5r5WU3yPbj2aLVts8Xw/wBFOLIsvaHepv3qOK+i7GMNto6DUHW+Y+a9zbSNAAd0FKT5hlhxrkfLvEocRhpmd4HRysdma/UEEHQg+4fBe7cK4kJo2SN2c0OFUR8VU/TFwJkkDZwPHG6rGlsdp86+K5rsjx0NgYx51bbb01AOi9j/ABb1SlB9L9v+zy+1w0tM9Qw+ITJn0XGxcdYPygjDtEw6By9KXZ7exypnR/WlhnXMu4qN7RIeLA803cAL6SbRJOnopN/ER1CTmxwOxVIYuosi/wDrGih3wXPN4qBoSijiDTzR7gB1MMgpMjECqXHs4rlNWnG8SB5qM+zMdF93gUw9c27ioB3RP+ajqg+zyMfOlLAFKlgC8BI7bJBqmGKTAiUnARa1TDFtoTDGrGBMjRsiI1qkQiAUcxSiai5VNrVSLo1BWNUu7W4imWqqmCkKmMoMjSrBwQnRqcpMZJFcWlbylP8AcrO5UdT6m2EAHdUzCCjdyiRxq+Ocr4g0oJhoyXADrfw1XS9h8JUwky66k/j8UjwHhD8QX905meNod3bnFr5QbsM0onTmRuF1HZCF0ZkDhVAGjuLUu25NTSu6R0dnhW7R2Uk2UW8hvOil28dgGgkYXAXQPJee9o/rsjzlafJ8jnMiZ7xzXOQ9k8c45w6Mk2S4PzNA9QLXmvdcT0NdbVZ7Yzj0W52ur06J+DiTHVkLSPVuYe5cZ2l4I88NBh1xAbGCby5roEdF5nw/BcTjfYjdvXiexteW/qlipdQzlFbU/ue5dqoO8ge0i2lu2+y8I7RYY4f2Dpmr3EHU/sr1rsfjcS8ZMTG9uleMO8JHnVEEagglclxbslLiu9e+RuGgizu7x7TJ3krcwETWgg+V+YoFdGHK4PUnRx58erZKzzpvEZPtFEZxOQbFJRix7kYNXb+py9Tj7uPQfZx6Yc1t3aGbrSr8izIj+qy9Td3Efb2jmHO1s9qplVval3NTLteXqK8cS1k7QyncrcXaKUc1T0sAT/rM3UXuonSM7UP5rB2nl5HRUDWozGLfrM3UfuonQxdqH81P+lDlz4jUu7Q/W5epu6iKGNYGJnKt5VzNGIRsRsi2wItIpGF2tR2BRpEjTJAbCALC1SCxyNGshlUgFDMpNctRrDxNTTGIUKcjCO5rICNSESKApgLUaxcRLfdI9LdIaQ2L90o92m6WsqNM1l32Lw4LpXOOUMYDfMEhwBHvXS8G4i15MlaPcWgkUSxjnCyORvMqXsKWmWSF4DhLHVGgbYSdL50SfceinxzFMje1sNtYyw2xQIuzWuup356rg7Q33lnp9np4V5nfxOYeQI89kHHNFU0CzppQoczfJUXC8ZmYCDyVL2+e0xAPkN3eSNxa++V1sN1C9zqSVWeiQ5MhaS0jpbeS1BhISc2RuYGtQLBXz/C6aY92ZZIYKFvslxG2UCxqdLXrXZhvdwsjjmMwDA3M8jvPKxei0mJGp2dbNO0cgCOi52fERySvgka4+zLG5tZA68xaRvdhw9HImLLhqShYTiLI8PNM8ZTG18mcjQ1swHm69ga3G6V3LZAWmLvkfPcDPCPQfJHbGmIYaAHQAI7Y16mk8ixEsWFidMa13SGk2or3sSzmK2dEgvhR0gsrcikGJvuloxplEFgWNR42rTWIrQhQyZNrVPItsCLlWo1iFLFolZadxJBGooQGooKUJlIjAoAosYRASAUXBGpDcExhdwW40QhaYEasw3AnI0lEU2xyahbGGqYQGvRQ5ajWEWwoBy2CtpNZNYo2pWtpNqMa4g2DRGoI0IVlw+LvWyud4nNa0gnU8xXoqy1fdk/alvbutt78Tf4/FSzQ+h2X7PN94kiOB4mI71rQ+49VSPjmnc4scxguu9kBeNOZrkocZa1r3AWGnUWdjzFJfgM7jJ3bjljNl2tD9LXVeVp5nqa99Jas4NjyKdj8IB1suJHMEZL5D4Kxw8M+Gc2QuZK3NTpIszQL09k8tUCHhsPef9VlYde7rxmwNzfkgcbxQstieXMDgDZo36bJW9TqiknpVv72dZjuMB9OuwWe4/zS4Dj+MMsjsrj3djwgnISBvW1q34LiO/cWNHgbmNjYua00Bp7/AHLnwxdnZMW7kzg7Xl+lJcxQRogYmMi2GLv0nBqFjGo5E3lWsiDibUKFiG6NPlii6NHSayudGoGNPujUHRI0ayvMa3lTLmKBag0FM0xEBQiFIJKGsqy5ba5aLVpUaJpUwzXIrSlWlMRlSHCgI8aE1HjCKMFAWnBTC0UyVjJAHBaaFN4UQqxiBoMworXJdpUsypRBxYyHojXJLOixvQoA8xGa1LROTLCnUQE8i3kUi8AW40OpSWL4kK8FjX2jz/RH4p1jsy3+fPlh5Hhvtfx9aVj2OxofLiGX4TEwsbsaa52Z3rbmn3BcsJbPiJ13O59fMqOHxr8NK2Zo1bu3UBzXDVp9Qfca6JO0YU8biuI+DJoyKTLPtayTcD2bvqPP0XKHHOafLn1NL07EmPFxCaF1giiAafGa1a7ofuXCcX4dRJI12zUKPw2XiJVsz1cqv6kxKTjJsEE+d+9Ggxkk7w1lga2dhX2j6bqq+qm6o30XX9kMHyy3YBrckE6DTYLNRXAinKT3Z1PZXDmKJ8hFZYXkdDTTZ/nzXPULI5gX7l3vEWNgwUrnmgYjGB1c4ZQB/O19F5s7EC7O50v+HPdej/joJwk31X2/2c/b5VKKXRjhjPRRUH4mVosOu/52KgzGEnx0fdX3hd3cdPn8HJKceV+y/LDBqkGLGuadtPXb4qbrG/8AApHiceJrIZFExIgethyXSGxcxqDo00QokLaTWIPjQTGn3tQnMSuA1ihjW+7RS1ZSGg1lI4IZCI4qBUk9i0/3GgixobUZqSgBmFNxlItKahKJg4K2VC1q0UWibchrZKGCuiI1bBLWi5QJUHOTslVsk6REikST3IuEa57g1os79AAN3E8gkT3EnEuIHJiSbL5u5N/H8Eu3wihv/wCTr5AckNzDV1pe/wB/xXXHGl+45nvw3+fN+HiQxc9ayHM7YRjYen4JGO3HM7bkj/V7JJ1KlOLN0B5bBF3Zm1XT5vuRd5bIgjDmk/lChXW+d+5BCNFKWXWzmlpHqhkTrb5ur/iw4tOqp8N/TZ7+j3EWTywOzwPLCdC3drh0IO/omH9pnO/tYhfMsND9k/ipEXuL5Xz/AIjyQH4Ab0QOo1/2+C4s3ZdTtFcfaZRVC+J4hE8bOafQfirvs/2niwzCGxumkNEAeForaz/BV8XD29B781/5U1Hw6t6H6O3wofNRj2K+JR9qa3RLiXHcTjHDvTlYCS2FujG9XHqfMrePipjHDZ3P9E077z8kVsIaNNOn8/7rcrD3YbyHzK74YtCSWxzd6par3b4dU7/Fr1vlTnitY2oGAfTtdWnwn0PNMBhdE2gT102QZMO9tAir61m+CrJxf0t8fHf8hxLJCssYulvdWvXw8wssulXmy7E6aIuGlNbW3odkN0VADmivyFtDwlu+oyudX+yLlpSVX848vUVJzbblXm37Li+Gy8jWJjy+Iezt5tPRQjehYHF94S0+ybb9+h+4KDDRIO4NH1ClJK9jK6setRJQw9QL0KCgpUJAsa5alOiV0MkLuWWouco5kDVZR5lhKE1yxxXGuBdrc2HIzXpchbaVgDjXJiNyQa5GbIiAbzrYcl86kHoLiXiFLkPMtF6gXK8XQ1ky5Ce5bzIZKEpbGNxtLnBrRmcSGho3JOgC6CDDiMd0yid3yDZ7hvr9hute87lK8GgyMM7vacCyL02fJ82j9ZakxWhHXc/uVcKaWrny8PE5skouel8Fx8fD/ZOWYC6OYddrQoeIFp01HMHUEeaUfIlHzUVWcrVPgQg5KWqOz8OXzxvxLPFYkEgttorVt5tfJaZiikGYnkdk22AFuYGvFlrntdqakklv7juMsjbS8dqS9vx7D8WKbVFjXHrZRCGnll021q/eq6KSt0/DM07lUjFJ3/bFllm46XVeSX81YZuHbyTbZq/umf8A1XzQnRANa4E63m9Rsoh/mm+ma9+q51y8jKU8L25pPgnxVrin138duRvToB6IjX1RHLXqhd6OaNO5oDSOYN77jc/ei3FUuv4FjGTTkn+2n48UtvWjT8bIef3N/BLSElT70KDpQjGMY7JJeSoE8uSe85OXm2zGzENpunxWoIq1O6veF4PDPdJNiZA1gBkbFbgXRC803hIJGcFoAIOh0dYCZ7Q8LwkeYRExzCVrXeKV8TGPDi18jpBfd3lZmb7LibzeyeddqV1TXz+iuTs7Tau0m0vnK0rooHbE/ZVPJiHv0GjBdn7RThDre1wymi1wdoQ4E20+divclXENpo5HVPqbb6CuMVGLXHe/f8GYY91G08yPmNfu+abl/Jd1aAf0gPwpVTpC94+y0ZR003PyVjw+YPa8E8yWne8oHzFoNprY0YttL584BcyiXoZQnuSOQ6Q0yRZNLoke9UJJlOUiiiEdIs7xKByJaTWVWMqGqaiFIKKYUiS0FElbBRs2mybVsOUMywFLYdAYOUg5BBU7TIVqgmdRzIRKwOTqRmwudHwcPeODbpvtOcN2sG5HnqAPMhJkq6wrO5jzO9txBr84bD9W9fM+SeC1Oic50hniuNumABtNDQ1v5DRoG+dBVfduN0LIGqNGzTvHcya6nzSskhB00PVXe0fpJXc052+F9arbw4ULSSrModQJr87osnJduNftdUsx5bodlBydfVsPpins7/gNIBy22+CnHIQ0i+YIUWMJFjbVMQwWtCClsuQZTknbVXfs7RkUp5qx4XhHTSxwsHjkkZE282UOe4NBNAmhdmgdAVHDYIHmBz8RoK84RiMPhLmmcJn5XMZg49S7OMrnSSkUxuUuFMtxs6t3VnLSqvf56E44pyWqtupnaxj4ZjhSyON0McETjCC1skghj7yQ3WYue5xzULGUqkGZdFxPtjh8ZI6TG4bLK6rxGBJilOUUM7JC5kmgAvQgAamqVRh5IT7TiOlCyjjqMfj3Fk5ZJLddN2l96FhaIXuoDkLI66pmQxfkuJPmOX80hZW9fkqKpb17iyTg2k/Z34/dAQVNoRWlg3Gf3kUozztPstDNbsOJPotqd1X2/JtEdN6lfT6r/wDmv5Lfg0LJS1j2l7Q0xSxtcGPkw5l78OjJ/KbJd/mluwzOb03FpGYhszSGSSOJjje1jmFoe7vXA5i0OumOoWGklxoAuXnPflpsEgg2CNKI2KLiuO4hzS0yvIIogucb5666+9c+TDclJPh/fH3+2xXHmcYOHJ1fp893YbjmMb30hYbBkccw2f8A+z9bV36yq3F2UkC/PzOyE5xJtxJPU6lBxUnhqyNRtufTzRlJqHl8+dBUo6uq9vz89xiWTJF3QNyE7jkDebX4JjCDI9kfMNLnep5JTBsbE0yPFvrwt3yjlaa4ZISHOcBZ8V8zyGvvPwQx7NUuPLoufqx5S1r6nwVefT8eCoe5aJSco+H9n0NJXFFGSNFi5eolyCXKTSuaTOnGrCtRLQwVlpToorgthZSxIcyZMhQU1G0WOmYthYthAckFKljQpUmEkRyqBaj0oFbcShzhGFzOL3aMZ4ieWbl69fgOaYee9dZ8MbdPQfimpAyKEMcS0jxPIAOZ55efQegXPYrHPf4WAtZyA3PmV1Kccap8enzkc8ouTTVV58PP8Fpi8Yy6JAAFADl5JZ0rHeybPzVa/BvAzFprmd69UEgtII9QVL9VK/27fyNLC+L5loXAjbUb+QSs7moTptNND+V59EBLLtF8EHukuYcPHponsPJ52qoFO8Pnp1dQR8Qlx5tI3d95JLhb+dC0bIthgO+qRjlTDJF6KlZxaR1mFa66Gws10G6Lh+FFzJJGtJjiDDI4bRh7srC71dohYOcWbNAtreteXyXtX0O8Nhk4XIHtEgxE0rJmnW2gBgYegy6/rkqOTLot10/39i/dJxi093d+nD7+p4m4NGxUo3DXyaXetck32u4C/AYqTDPshpzRvP8AewuvJJ60KPm1yqIJACb2ykdd08pvTcRcMY94lPhzPSIPoymkwbcaMTGGuwgxbYu6eXFpi7wMLswF8rpcz2H4IOIYpuGMhhzRvfnDQ/2QDlqx5/Be6dkT3nB8MOvDWR/CHL+5eJfQ7ORxbCj7TZmn0+ryO+bQueGabjO3wGljVrYf+kTsYzhjYiJnTmQP1c1rMmQxjQAm7zLhiQvYP+IN3gwh/Onb6X3Lv9K8XD0cM5ONy6hyqP06em/nb/qhmE+MdL2Sk8lNbQ8V6etbpgHSxuElO6q99e+kclq35f2CLTSXi/6/BNkZcQwm+bj/AKVby+EBuxuyOgGwVe2UNY1rDchLszuYutkeEEurcgJsT2fXh8+/qDLHfjyv3S+3D0LN7Kca2LQ4eX86qsxblZwP1aDrZy+7n81U4o7p3Gor582oLkpTbjte/vy9OXhQkDqitQrUmuUJROjFMOCt2gh6zOpSOjWgTFOltYkgcrNOCG4LFidoyZC1IFYsSIdSYWNyKsWKiNJmiU3wuK35jqGDN6uumj46+4raxNBJzQs/2shjcY0vylucA6ka+Pr51t8eq1Nr/Z61y2II/FYsVI5G56X84EnBKGrna+z/AABnYfaFgkahJMcMpDtxosWJc70u10YmPdUKnyUVixcDOgNG5o3FqRlHIUtLE6yNbA0hI5Uw2XoFtYumGR0JoTLXs5wp+MxEeGiIbJJnDXPvIC2Nz9a1A8O/Jd39EvaCTAY5/D8WDE2aTuyx9DucYBTedU8U2xd/1daLaxNkd3F9LEguDOw+mPgIxWFM0dHFYVplyAjO/DH+0aW76UHD9Ege0vn3vbW1iTDJ1Q0orifTX0XT5uFYP/BLP2ZHt/cvFPonbl4rhPELuUULP/byj962sU7dyXmVik4u183O2/4g3f1OE/xpf8jV47AG1qSPQArFitiVxojOWn6qvzCggg1dVzpV2LdTh5N++ysWI59o+wY7tsLhBVyP2Gw6ouExBJ8N5iddNh1J6LFiVSlcYp1YLSttXy5/0WuGNHO72Gght6GR55gKvxLrJPUk/FbWLrybUicd7YoQorFiix0aLlq1tYptD2z/2Q==",
      nationality: "Argentina",
      hashtags: undefined
    },{
      id:4,
      name: "karim Benzema",
      position: "ST",
      age: 34,
      imageLink: "https://i.guim.co.uk/img/media/5f1c5ea628f850be9ecfbee70249e4e5ae05faa6/474_315_3167_1899/master/3167.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=bdc1ec1553a52eb796373ccf46f8cb88",
      nationality: "France",
      hashtags: undefined
    },{
      id:5,
      name: "Erling haaland",
      position: "ST",
      age: 21,
      imageLink: "https://resources.premierleague.com/premierleague/photo/2022/06/13/2614d408-15f7-4519-81a3-00d77fad6108/Erling-Haaland-Man-City.jpg",
      nationality: "Denmark",
      hashtags: undefined
    },{
      id:4,
      name: "Vinicius jr",
      // position: "LW",
      age: 22,
      imageLink: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1240963575.jpeg",
      nationality: "Brazil",
      hashtags: undefined
    }
  ]

   }

  ngOnInit(): void {
  }

}
