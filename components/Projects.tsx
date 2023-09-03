// Import necessary dependencies and components
"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the Project type
type Project = {
  _id: string;
  link:string;
  image: string;
  title: string;
  technologies: { _id: string; image: string }[];
  summary: string;
};
const handleImageClick = () => {
    const link = "https://chatgpt-messenger-yt-two.vercel.app/";
    window.location.href = link;
  };

// Sample array of projects
const projects: Project[] = [
  {

    _id: "project1",
    link:"https://chatgpt-messenger-yt-two.vercel.app/",
    image: "data:image/jpeg;base64,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", // Replace with actual image URL
    title: "ChatGPT Clone",
    technologies: [
      {
        _id: "tech1",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUiIiIA2P8jAAAA2/8A2v8A4P8A3f8A3/8A4v8iHx4iHBoiHh0iGxkiGhcjDQAjCwAjGBQjEwwjBAAjFRAjGRULwOIjAwAjEAcD0/kIyOweU18Vk6wNudoWjaUcZXUXhp0Zeo4PsM8Tm7YfRk8YfZIRpsMfQkohLC8dXWseTlkbbH0gNTocYnESor4Mvd4hLzOkqqfhAAAYf0lEQVR4nO1dWZuquhKVEAiggKBuwRnnodX//+8uqCRFEiDYjec+uB7O2V93i1SGmrKq0ul88cUXX3zxxRdffPHFF1988cUX/yXsrtO1/+uXSNELfPSEPx7+0Qt1Bx5CwWW/ufQQGrt/89D3YHtoMk/iSDe1aLSbLzrI6/32ma6HLqv1LTIsI4V2m05Q8Bfv+g7s8L6ODFPHWNMwxrpJrHh9RJ7z/iO7YzRZxxYxs2dmwNi0oqU/+Lu3boD+YG2ZrxfJgU1DW5/Qmy/koss0HTLumRom2hn97bsrwZ9opiZBOujxKhw335J9dJwJQ/Z6ppWEH1c6aGVJX+Y16PO+1+yVhugcW3rZEzUzHnZbkqQE/7ZW6ds8ZNSnwVj9cQ76iY3SEXuKGHx0FoNFpYAPGfES9dWeZqPNrXxF5CLePrkXuxf5fuFkjH6QytIKhlfZ+kzVc+FLyPRf64JRoBF7I2wSw7Isg6Rmg39Ha3b36p7VRSvMqyysE8OI4jgiBPzK2vza2KoiWBls8WjrxSVVK/vFPMGCptfJsmYax4cZt0Azi7PbnoLMTxofd4T+FscfW6e+Rr/VmoZ+v5s5kcPgX2qtI4Nbb8boUjGNNlqZxQ+k+/c6Qf7g5TakJjKm02icP2T5gyWhAi4Kw5p6XD+JVVxzOtmiMi3Yd5PiBOqpLUV+wRN1wjgfAxx9aBJRlL+VsRW+0kX3NSnKaMy6cqUaTqLCX6b7diL6Q90e+76Fonb+HfqLfBfqM9mYdv0OJ6OpTSRq0EbzwgRiazRBMl0yOFqVX/jn+Jfkq8a4y7WI7R923MsvhZXaG88M8CcaiRaoJFBC9ButwyfMfpDvQvNaOqKpDR8VfBQj4UKO4FJYoTqZl/sHziafRHP5gUiqf84ltPYVcVIPrXQoghlf4A4LjwXDYtwufsV3olseTH3CsfGvrxevM0/jTkFRYn3ChEBb+KtM3VZazcEqH1XyAXuBYqy4Ymx0hsYOW6t8SNAaurUkrjKZjye5VMKf1pMadid/OWtTG8yPDyMCRLGmDxFtlICf4vSntd4rXabmtEHE8h7c4+vtsKawJbpoCpejsUtVancMxdbxUeE54/lra+iz1t3vYJl/VxKq/D06YrBSyQwNnRhoIBIfVHYWG9f23RqqaFTXy+AQgykzb4cISGztlOKrju3QvdFp2yKi2esFyVnRg+qiHdArmMUK6RYUvb6yr809N2PSdghFValxUs4aoqU0I4DJUXlT/Ws8sG8DUQeqwXJBC0kSRtf26g4K2xytezWDfDpIky0/PmFeRDM6NJgNqkzNdW3W4HewL8ZbSm1wiYqRrhkPm+TGqVdj7qrcuz+As8klbJhScDsxnEX9FjbKf1JvWNFIvQ/nlEs4amiYhj1gBtMV0EzpU4PYeojYm+Smt6mXD/Nz6WJLmn38/e9tCuZcNBxLlHCpjXWjz7+/dpriXQnRlWhFpGF/g88zCdtOKb65WtBctPnWuYHe/9wcvvdN/lnm1Bgn9XDWmXxMwnesxWDCBAR+KcZ3ZZPYO35K07xj8Z0Lc2j0+KKBNL3yIeNwQa1FywEiC2N0VQntccRkig7jDZtFU1ldAYvfsk/TQTTTpvpNaEbtBDb3bic4sjVLVG3GYJt7bdfWJaSB2kXN7UJrZieMSaZb/BUTUVWhMs+79UQNjQ+JWijqnaE4z/FHU5btJnul5Jn3uegpbBaKuhsmjDGn2UTm4OCor6JtwuRjEXCzUNR2mZYhO7bnED0xU9Q2aJQvnWPbCdOAbgiVLQ+0jA5NdbfDJGdTW/Uguv33bbNOmNpWGHs0pVoGRwWi4RCsXutY69vYbr6bjZZDfOi21Zv8AbQLm2Hhd0ADYVyb8mnyrb+F3aWj6da8V7fDfBnRKgArotf6mnTlfOLwST1zCWJemWWHv57WvPd42mT3/xIsJbyt3j5gE0onye4ASsek2gZQY/GJI1JvrTacfRZQYM3pu+6w3+8Pnkj/NXR7Y/AX0aByyTM/o/3TNZbXq4zU7GGf2QPzZ386Hhfn8+qF8/n8c5yc7nNqS8wEOeUy2sNc837iIJ9GiBoR83q20w+8ECH/coJ5GWIYRIRhgD8xlvvOgyw+cEWD1+xI79dA+XsVVE23n1Hah5vzcp2MImLx3KhamIZlxrfddHW8IBSOBz0wWexI7yN0E+pAvXa97WayXRbL3S3KCHxP4vdbwNg0CbFInKxXk14qZ/85nz5VNO0fAXeAqtGTMKtFcI7L3ci0UtHelkyQVM8Ij1EyPafzOe7b1EK173dnYNY3QpNlEj9k+yPRBDktbTY9Hxh34P4JxpB9yL8PE0MklbYhZj6FH6LudVHcslSimK//67v2JXQ9tF82lTDjM2M9g/lE9s/HDxs+SE8myG9zJ/a8jCNbUhMhFY1kDGlTi+LRbZYkyW63u16v6X/Tf89ucRzh1KwYHFmzUkQD785e2I6Qj4IdSUULJxMGf4C1n8n+ELwqv8LQZwjD1w97l81xCUiKes3Gxjoxk3Po/7nz1s8Kdipn76Xhb9cZCJn8Xl2BnW07Lkjb6Nck1i0iocUD6ATvJugv6y9sD51v5eI9ZDPj3fy88RAa0M2lfEZod+ln9CSd2Ptxu55FVVboUe/VkfJt34CD7lONlHwXznR5arL2qUsZ9B2YRsPYVh3lgAX81nmQeklZAWIn9SRiWZED/ebkpFqzUgUXbZLyzYfjzO34l3tXaeSxAO+qHsqBcdHy1ffwBoPUp4jKvl23Rud36+Ry9NBkVlFvlS2qYrrTp6/TyEm2O3QQOeaxG6BSCdPxMKLVb2TsotNNIl+6Pmj0bhQrY0OafMFmo0huzIpUOFZnLz85TG2PZC1hksr45lq1w0siyveoaDlTx42s4Ag6e7pGjW2zKIBlbbiTSero42izjiX6DpN4gd6pWw0Ga0G+VLxofUzdCspo1Qv6Et1KXrMezp5OorGCG5guUnONxmg/lwiJrdGmIXslW6BnoUQ0NUPX47OWmYakGgHLdABUYhXLXYqQJq4wBnnKHk3mGFk+vxugfWaY+VezrkGz7Sirt7JmzJXoXmTLlKkZsxmX5AGmUaCy8ekizRMYmXO1I7z5MrVFg2mU1lutL3BD00AfqEyfzUL0Ru69/yNbASgPLGBqzw0Hy5jLk2ArCYbSB4voeVy9VaqTt75fSBCxZWrkOrN7ZwVfbxWZsdIYnWa2hz/59jSO0IOxA/TD2zEzOqlx3rhqllS++CwU/dt3ukzzHC2z2npZ6t12+0Ew6JdsUThEeQkXLUESg9/MFynKiNVYSFw1SyrfQmZvWBnLS2u6kxo144yRM1ktl9vzJvVeZXvGn7Nl/nyoPaQlSBJeqYP2nIxWUr8ZuSr0UnvKylheFppF/uZaQgjppTowzoKG1F0wzNnW8SWvwpQNWT7MKSUolFR3OHyNNBm5NUq8SMnWjalf4lyyMhZznamAwZm6Hpp4bm2jSSE40Qm5HsRJYeYG648UOFVopfbVQYsIUubMqFMZcRQFrKy3onrhqcbB8G+FQRl0RO/IJGLFHnAZzHUIi9ZI+YlMv1i1okeHilkMt4W6gcp6K6blsiTmmFbOSkbbPwrV2o8BHAnDzUTSrEuXkQY0o+oQNdzDkg49Kj8BgVye+norOmv4huyAxrDWkbdKpQ0mzOgi/O2OKuTUH/R0qXMowEFr8BVm6ZGRA/sIWLs6b5aeWqa6E9F/i0FTuJIRE59jo124L0nDKPoGJ59qM2NRY8zREeTtSFnSEeZBFapZmOeW6ho6NoKlgIf5oojCuSGzGKlVzV9IIRMc3EE5lbWSBjY+IE4YCwXTSdUCjnLnUTP54bMPlUlRMZfjA4tB1fW8PhRzxiMmIpFVKHcvNHzBxlHFr2T1skyRED7u5fndPAQHL6BLkwU3SueiNiTvyBIMzCvUrB81xxlp/PQ8bSOAW7VGH4MjLEDx0KBGzzARb2xMROoUCM+trSJJlema/HVNXlFTk10KwXz2hc4wkteVi+jRwZEcwftUTauXQth3o/gqZM5NPrBvZRDtJz8q6vkCYA0sgQvj5b9j6bx6gJX9+CjmP0qTLBWw+DI/4MM/x62G1gLAElpCfVQ/51GnQbt6mpN7l5e7DIdA4ZhKVJSUsvMatwYkIebI8pwGkNFqVEcBJcAa/yrsMLUCot7rneDHzGmDhIF7pBEztzRYObiC6WFgMZR0CilLpAqSMS1MotEo8cqO/Lm1zdhq6sWvhc9JV1NhAEphCB4ZVFCCD1ENRtniQmZKwTeaJXLHNF8jm32WzamCdRGjKKbCjGZ5ydJSTJ86SM3SgLZDDQYRA99griKhhPXPFF/T1HJpYQYlOlnKR2IPgHUoiXwV51CkkICNaDQjdgfbfJVyc8g2aLMHAmUq0Rhq+5AI+xcq04ZEL+q58PQpWmQgeJaVGC6AV1M8pXm86YRzemSo06UKHUbgR3NfmayKGTTqYmLcpG1l4VUkrxoozKFYu1y0h4p+9xMgBcjtbnYAYs7VJxG4689h43diveMt278sH/V815J2VDKgcvoUyJWpPzDcFbPjwlNVVI2gaHqcX9pg44Q0QyCyGFkkVM+cz2E73CIUpsM+1G5EUZMIsYWuGgv0T4VUHfcuHab2VY/GQPO917sInina1U2ixTO3wRlU2cCVAFTiyDavzwIda6V2hiNyCIQAEeRG5BBDVTEeUYwG0gCYpSkkCth2QP3HQmXlMz9eo4fbQpAP8lvyKRRyc2fhqWpWv+uzVJTcmQ0KhY8quTbqPOJdIRlf/Ku4gq2iGYLmBl0ZFzA7XIeey9KJWJPX84BclUq+lGkRc2czmgGvibv3inQiEV4dHA+MEB24eoMRwOYpZbVitgNyZ9a1roMTswTWCV3Lszz9TSmlighHqfaQHQ9MAqoaaxnsCJ56lqvKISiz1sioU1P1QzPSMQKcJuvEp4AGe3nnb80QzzNDqu8yK6Ka9HYKx09VNZtjmMjT8U/VgSrL0WTRNGApiObU7dwkXZSwJZZWAtWbqaABOLio4D35l0I7sbiqu/k/eIqCrd24fBpB+jELDD26wiW9cG20whw9JGP5iDaJKa+nNvTzNVuha1y0hM824+rCYlToRG5Gi9LdGOYnX+Yue9OAnkfjSGJNg/Ey4xc/P4J107rJmFogQ/48HmBGuiyx30WTuHAGHPdr9EfxsA9bs8s/6aNBk8/Jw1gxQ02mEmtqB+i4HunZlQ5WNFtepOwA4RnMtZeX5dn+vciMITev1qv2j4X1pBtrR9a9AvE0EOBslfjuvTFCh/3m4qIwkP7BmK2D3P2rPMi3fYfr52vtVIhRwb7IpzHN6UCQ0e5QY5gnoFisWLFpsqtVSn9nUzowJe8JlA+Grm9PTa7TsmJXH3dY7PCLTX1qFylRkAaSO/HwbOf4DuOTeelswux+CaGmh+5rjgduRifVMMtGS472ZZrrS6GPMSMMMeOAqFp4q3rHBaEPO1YJZaQoe4AmiVE0sthKhg3G1d/EnMNsWrMfNM4nkqXrQWQD/BGpsqkBoByBVe4yYtvkNcS9MFgJd2GY+NyMYuoWSSoZdCOa3190LbZIIQ0E9NtX7XzCwNSMViBQc+REx0PHnclzL9MJ7DQugQ73I94RwakZWw0zIalWKUbobBpKyXtlAH5fMcj0wZmR66FNdhONxr0XiY+NOcKdzNk7i2UWmBizVQeNKVuocP7RY+cNRoNDugygHqG4id0JO006yaquMNG2Zb3O6zDw56boM+vEuFGtx/X4ZDFGg3qSDP1jqSIG3GFJ4UeqBKfBL2r0PXstLQGgoS/nxttDTaYu6hFGZZ/roopz5Ew+W8ZyVIftd3izA2FOEbuLIgOs71moE4WRtE6j20+9oP05KUsSZHcSub+T7yljb15a9qSZZHTdngZZefkzQwMKEiQszBK4bP+SpdfJa9/35+lMs0iJgLoVb9+5V0om4xitRqWla9k9M0acTFcnJ2sYMD4wpa98tsl0cOrN+P9S2RZZfXh5WVem1pPjb2ueIAbodDXLBlOjxYej3XQ1YSQba6GkAmzQI8RcLq+zOKsrrah1zK4Fmx/e1Z9lcHxvNbNKV+vzmzNBgbOPtXsA6kc9b/yC53lZHenzd8P7EbjBWZVw9ZeYhnb92/pKigE6LEel20L6NsazCHiWlQBf1+v19In1+nrdJclsFEepO2ioHDLmA2Boux/kt9bTOw1jD9tZ9UQKUr4KuU0er3LuJs/StKzqquX+LamQVQWBLcP494muEaCnQjvdIjhkyjrfGaSOK/wnAH0xprdMo/9Zww+JcKl08W57+c96m6SacLNa37S68vLmoj1kM+Pd8thPnSY/Z6185J4Zrj+Nk5VdH46pFcua05BfNKd5SqY/OtTg0W7+rA9/HLGwHkP4ExL+ozUQlCBmu0Eqp79fbF8NhojMX6+GnnWYwPHsOj9POpl3BPOeY3Y/UftXWdL2dyJ9yhkGXupOhvfTYrWEbAPz0RcKmopXqyjwJ8n5uHcR+ucH/Z7IIKK9vj7Qgkeh15ftDAceOMgyVz/n1Wq7TDHPkP5/u1qdF8czaPKJBm55hwnWcXPdvqopJf9xAHUWOPIG/cEgAHg0bQOG1TpV2nF6ZqDPWr44oAPyiCIFivtD1hhRft4FChXIvPrFP3mTDst91TJRwfm2rDGizw6Bagku7JYpo/WugiBTWkdO7t6ZjRQDqSFLAGP9UKchGcO3EcvtHbD1Uk/8BHfqYvNS3Gi2E1WIL4DtjdaVKVWlKpeFgK2Io2JEB+pbSPktgxSMVNl680vWSVTlShvQo7SobWB/VhUW8Odu0kkHk7YvVekFDXqUwqmCPXZNlfsDGi2d34FtCKVABnDpNGsb0p+CPslKyRy2/du+/QHc2aWm1IBN0Kyfp0PiHMDMqtEEaeuT9q89RrkFUL2zC+2YtiGbTBHaPuhXrhgOUYPYfgdTr/GdXYgR6rCWVZLDyxIq6q65p9DmkG3f4JEX5Km7T9Dy4WjYhZfqkI1qWom6Ug3LJRrjnVtY3D24syOGl+pYZ+VIgTo1bTf4ZHcFNdBpAWD9muD43Khr4w3ANFzLMfB7t4PBXg2AYdfk/O1zEr53ow1ai2RoJV+GPaGhlXob7M6eZr5F4YLcl9LpNJmM/3sJoc14CsgHG3Wf/9QqfVtCSKR/vOik2eFf4xt83sX79xB2h7DKgPw0pBQxe9hy3/m3rMUD3gR2YGhY+wqKXK2277B895bO8KfIPyIKPasAbLvxXWFvgnYxa+gBi114VLiuDGxkW0+2MQ+4yUaS3X9oxh11bUo1XPtnM+9cS2QX7q2m0CP1K4/Bheet37s2ahTjZ3BdeF087IZtqtwc/0DjC8/fh9/4xhevwKq21uCMXJm2DAZ21XY2kSa9VJcLOkNmgzVHhdudrUStfWxIj/RazwjDux8U/txBV7gFs4Ix9wDn1IwvCsuOUTAbdkR4A6zppViHKsIv9IrDxqPozwF1dNlmVKAvs1Lz1lNtheYhdRuxi7ZwhWJ94r1+PoNyWzuvTmlRv/sTVAWaEq61TN79BqNCM7rkzrZdXLtmNKmeRlbo0LCHxFsor+kvIiu4gtEEufUBVwtti8VHV68q1GBcb739A9LUQ6SbXqiIZeALrlIrUZym8Figp5jRuVyp2gPWP/EDEoLqH6H9HH2lkCu4wkQoLA4uUN9kNWT7sqXqU0JnZRnin4FVrZWkkrrhYV2sGDCjvaggHJQUfDnd2h1C2bp3Lqzg6xN0GthqL78cFsJFl2uxoCxVlnK6JFoVaY4mWd8ld1aAYpqPkL4yt4a1X5gU94UzRseE65iu66Wl796eKz4yjeTEkWNtSGhQPCv5Lew+ZXZhY4vyWkJn4D8qWvhG4rNDud0stlZ9rtV4eUfjvJe949vMdjbrnfMbjEE/DBJvLw8y8/i02okVLaa+qjZ1aBJxecaMxT1dHJ4U6c1UpyOG8fAzU9gptq7AxMJxHEcZ+1wo2FEouBqGsjsYiKXFt1uMYZWM1bDQ6DcAVzU8B1fKZlYtuAr3I0mjYeHGq2ZFOL/F+CwL2jn5lAuuHHSOasnjetQKPb8UssRLUT4899QX1QAt+YJ9/oGaCqHhL8EX0vLzNx80bN43rqg9kjbGbh3oLKnce4iX6sLVGwVJY3/L31lBIWlu/gEEB+lFOwRfT28WJAWpu0CIQBjH0gb1n4CNTgkwEfhxf9d18ZuKFvdff5Xo8N7IbMjWnc84axL0UGe1i81HKwgjul1Xe+T/crvYgxBN5kn8IIsbFomvi1DW0+FjsFNXLWsFsbkECHmDvzn4coMQhZfT8Xi6hO3e6KgKu+uo0mIaPNRx3fIOE1988cUXX3zxxRdffPHFF1988QWH/wHtB6N2fV/adQAAAABJRU5ErkJggg==", // Replace with actual image URL
      },
      {
        _id: "tech2",
        image: "https://t4.ftcdn.net/jpg/03/22/95/69/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg", // Replace with actual image URL
      },
      {
        _id: "tech3",
        image: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png", // Replace with actual image URL
      },      
      {
        _id: "tech3",
        image: "https://dxc.scene7.com/is/image/dxc/google-cloud-color-trans?qlt=90&wid=1200&ts=1637194234169&$square_desktop$&dpr=off", // Replace with actual image URL
      },
      {
        _id: "tech3",
        image: "https://sdtimes.com/wp-content/uploads/2020/04/1_oBm_3saYz4AI_MS6OekdFQ-490x197.png", // Replace with actual image URL
      },
      {
        _id: "tech3",
        image: "https://appsgeyser.io/geticon.php?widget=Chat%20GPT_16603234&width=512"
      },
      {
        _id: "tech3",
        image: "https://wphix.com/preview/nerox-react-prev/assets/img/features/next-js.png"
      },
      
      
    ],
    summary: "Developed a ChatGPT clone, incorporating API integration, Auth0 Google authentication, and Firebase database. The application allows users to interact with the AI-powered chatbot securely through Google authentication, ensuring data privacy. Messages and interactions are seamlessly stored and managed using Firebase, providing a robust and efficient communication platform. I am thrilled to demonstrate the capabilities of this project, showcasing the power of AI in real-world applications and secure user interactions.",
  },
  {
    _id: "project2",
    link:"https://oxylabs-google-shopping-skylakefreak.vercel.app/",
    image: "https://cocosolution.com/cms/uploads/o_1e75lt4up8k71bpdrtb1gfb2rja.png", // Replace with actual image URL
    title: "Google Shopping Clone",
    technologies: [
        {
          _id: "tech1",
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUiIiIA2P8jAAAA2/8A2v8A4P8A3f8A3/8A4v8iHx4iHBoiHh0iGxkiGhcjDQAjCwAjGBQjEwwjBAAjFRAjGRULwOIjAwAjEAcD0/kIyOweU18Vk6wNudoWjaUcZXUXhp0Zeo4PsM8Tm7YfRk8YfZIRpsMfQkohLC8dXWseTlkbbH0gNTocYnESor4Mvd4hLzOkqqfhAAAYf0lEQVR4nO1dWZuquhKVEAiggKBuwRnnodX//+8uqCRFEiDYjec+uB7O2V93i1SGmrKq0ul88cUXX3zxxRdffPHFF1988cUX/yXsrtO1/+uXSNELfPSEPx7+0Qt1Bx5CwWW/ufQQGrt/89D3YHtoMk/iSDe1aLSbLzrI6/32ma6HLqv1LTIsI4V2m05Q8Bfv+g7s8L6ODFPHWNMwxrpJrHh9RJ7z/iO7YzRZxxYxs2dmwNi0oqU/+Lu3boD+YG2ZrxfJgU1DW5/Qmy/koss0HTLumRom2hn97bsrwZ9opiZBOujxKhw335J9dJwJQ/Z6ppWEH1c6aGVJX+Y16PO+1+yVhugcW3rZEzUzHnZbkqQE/7ZW6ds8ZNSnwVj9cQ76iY3SEXuKGHx0FoNFpYAPGfES9dWeZqPNrXxF5CLePrkXuxf5fuFkjH6QytIKhlfZ+kzVc+FLyPRf64JRoBF7I2wSw7Isg6Rmg39Ha3b36p7VRSvMqyysE8OI4jgiBPzK2vza2KoiWBls8WjrxSVVK/vFPMGCptfJsmYax4cZt0Azi7PbnoLMTxofd4T+FscfW6e+Rr/VmoZ+v5s5kcPgX2qtI4Nbb8boUjGNNlqZxQ+k+/c6Qf7g5TakJjKm02icP2T5gyWhAi4Kw5p6XD+JVVxzOtmiMi3Yd5PiBOqpLUV+wRN1wjgfAxx9aBJRlL+VsRW+0kX3NSnKaMy6cqUaTqLCX6b7diL6Q90e+76Fonb+HfqLfBfqM9mYdv0OJ6OpTSRq0EbzwgRiazRBMl0yOFqVX/jn+Jfkq8a4y7WI7R923MsvhZXaG88M8CcaiRaoJFBC9ButwyfMfpDvQvNaOqKpDR8VfBQj4UKO4FJYoTqZl/sHziafRHP5gUiqf84ltPYVcVIPrXQoghlf4A4LjwXDYtwufsV3olseTH3CsfGvrxevM0/jTkFRYn3ChEBb+KtM3VZazcEqH1XyAXuBYqy4Ymx0hsYOW6t8SNAaurUkrjKZjye5VMKf1pMadid/OWtTG8yPDyMCRLGmDxFtlICf4vSntd4rXabmtEHE8h7c4+vtsKawJbpoCpejsUtVancMxdbxUeE54/lra+iz1t3vYJl/VxKq/D06YrBSyQwNnRhoIBIfVHYWG9f23RqqaFTXy+AQgykzb4cISGztlOKrju3QvdFp2yKi2esFyVnRg+qiHdArmMUK6RYUvb6yr809N2PSdghFValxUs4aoqU0I4DJUXlT/Ws8sG8DUQeqwXJBC0kSRtf26g4K2xytezWDfDpIky0/PmFeRDM6NJgNqkzNdW3W4HewL8ZbSm1wiYqRrhkPm+TGqVdj7qrcuz+As8klbJhScDsxnEX9FjbKf1JvWNFIvQ/nlEs4amiYhj1gBtMV0EzpU4PYeojYm+Smt6mXD/Nz6WJLmn38/e9tCuZcNBxLlHCpjXWjz7+/dpriXQnRlWhFpGF/g88zCdtOKb65WtBctPnWuYHe/9wcvvdN/lnm1Bgn9XDWmXxMwnesxWDCBAR+KcZ3ZZPYO35K07xj8Z0Lc2j0+KKBNL3yIeNwQa1FywEiC2N0VQntccRkig7jDZtFU1ldAYvfsk/TQTTTpvpNaEbtBDb3bic4sjVLVG3GYJt7bdfWJaSB2kXN7UJrZieMSaZb/BUTUVWhMs+79UQNjQ+JWijqnaE4z/FHU5btJnul5Jn3uegpbBaKuhsmjDGn2UTm4OCor6JtwuRjEXCzUNR2mZYhO7bnED0xU9Q2aJQvnWPbCdOAbgiVLQ+0jA5NdbfDJGdTW/Uguv33bbNOmNpWGHs0pVoGRwWi4RCsXutY69vYbr6bjZZDfOi21Zv8AbQLm2Hhd0ADYVyb8mnyrb+F3aWj6da8V7fDfBnRKgArotf6mnTlfOLwST1zCWJemWWHv57WvPd42mT3/xIsJbyt3j5gE0onye4ASsek2gZQY/GJI1JvrTacfRZQYM3pu+6w3+8Pnkj/NXR7Y/AX0aByyTM/o/3TNZbXq4zU7GGf2QPzZ386Hhfn8+qF8/n8c5yc7nNqS8wEOeUy2sNc837iIJ9GiBoR83q20w+8ECH/coJ5GWIYRIRhgD8xlvvOgyw+cEWD1+xI79dA+XsVVE23n1Hah5vzcp2MImLx3KhamIZlxrfddHW8IBSOBz0wWexI7yN0E+pAvXa97WayXRbL3S3KCHxP4vdbwNg0CbFInKxXk14qZ/85nz5VNO0fAXeAqtGTMKtFcI7L3ci0UtHelkyQVM8Ij1EyPafzOe7b1EK173dnYNY3QpNlEj9k+yPRBDktbTY9Hxh34P4JxpB9yL8PE0MklbYhZj6FH6LudVHcslSimK//67v2JXQ9tF82lTDjM2M9g/lE9s/HDxs+SE8myG9zJ/a8jCNbUhMhFY1kDGlTi+LRbZYkyW63u16v6X/Tf89ucRzh1KwYHFmzUkQD785e2I6Qj4IdSUULJxMGf4C1n8n+ELwqv8LQZwjD1w97l81xCUiKes3Gxjoxk3Po/7nz1s8Kdipn76Xhb9cZCJn8Xl2BnW07Lkjb6Nck1i0iocUD6ATvJugv6y9sD51v5eI9ZDPj3fy88RAa0M2lfEZod+ln9CSd2Ptxu55FVVboUe/VkfJt34CD7lONlHwXznR5arL2qUsZ9B2YRsPYVh3lgAX81nmQeklZAWIn9SRiWZED/ebkpFqzUgUXbZLyzYfjzO34l3tXaeSxAO+qHsqBcdHy1ffwBoPUp4jKvl23Rud36+Ry9NBkVlFvlS2qYrrTp6/TyEm2O3QQOeaxG6BSCdPxMKLVb2TsotNNIl+6Pmj0bhQrY0OafMFmo0huzIpUOFZnLz85TG2PZC1hksr45lq1w0siyveoaDlTx42s4Ag6e7pGjW2zKIBlbbiTSero42izjiX6DpN4gd6pWw0Ga0G+VLxofUzdCspo1Qv6Et1KXrMezp5OorGCG5guUnONxmg/lwiJrdGmIXslW6BnoUQ0NUPX47OWmYakGgHLdABUYhXLXYqQJq4wBnnKHk3mGFk+vxugfWaY+VezrkGz7Sirt7JmzJXoXmTLlKkZsxmX5AGmUaCy8ekizRMYmXO1I7z5MrVFg2mU1lutL3BD00AfqEyfzUL0Ru69/yNbASgPLGBqzw0Hy5jLk2ArCYbSB4voeVy9VaqTt75fSBCxZWrkOrN7ZwVfbxWZsdIYnWa2hz/59jSO0IOxA/TD2zEzOqlx3rhqllS++CwU/dt3ukzzHC2z2npZ6t12+0Ew6JdsUThEeQkXLUESg9/MFynKiNVYSFw1SyrfQmZvWBnLS2u6kxo144yRM1ktl9vzJvVeZXvGn7Nl/nyoPaQlSBJeqYP2nIxWUr8ZuSr0UnvKylheFppF/uZaQgjppTowzoKG1F0wzNnW8SWvwpQNWT7MKSUolFR3OHyNNBm5NUq8SMnWjalf4lyyMhZznamAwZm6Hpp4bm2jSSE40Qm5HsRJYeYG648UOFVopfbVQYsIUubMqFMZcRQFrKy3onrhqcbB8G+FQRl0RO/IJGLFHnAZzHUIi9ZI+YlMv1i1okeHilkMt4W6gcp6K6blsiTmmFbOSkbbPwrV2o8BHAnDzUTSrEuXkQY0o+oQNdzDkg49Kj8BgVye+norOmv4huyAxrDWkbdKpQ0mzOgi/O2OKuTUH/R0qXMowEFr8BVm6ZGRA/sIWLs6b5aeWqa6E9F/i0FTuJIRE59jo124L0nDKPoGJ59qM2NRY8zREeTtSFnSEeZBFapZmOeW6ho6NoKlgIf5oojCuSGzGKlVzV9IIRMc3EE5lbWSBjY+IE4YCwXTSdUCjnLnUTP54bMPlUlRMZfjA4tB1fW8PhRzxiMmIpFVKHcvNHzBxlHFr2T1skyRED7u5fndPAQHL6BLkwU3SueiNiTvyBIMzCvUrB81xxlp/PQ8bSOAW7VGH4MjLEDx0KBGzzARb2xMROoUCM+trSJJlema/HVNXlFTk10KwXz2hc4wkteVi+jRwZEcwftUTauXQth3o/gqZM5NPrBvZRDtJz8q6vkCYA0sgQvj5b9j6bx6gJX9+CjmP0qTLBWw+DI/4MM/x62G1gLAElpCfVQ/51GnQbt6mpN7l5e7DIdA4ZhKVJSUsvMatwYkIebI8pwGkNFqVEcBJcAa/yrsMLUCot7rneDHzGmDhIF7pBEztzRYObiC6WFgMZR0CilLpAqSMS1MotEo8cqO/Lm1zdhq6sWvhc9JV1NhAEphCB4ZVFCCD1ENRtniQmZKwTeaJXLHNF8jm32WzamCdRGjKKbCjGZ5ydJSTJ86SM3SgLZDDQYRA99griKhhPXPFF/T1HJpYQYlOlnKR2IPgHUoiXwV51CkkICNaDQjdgfbfJVyc8g2aLMHAmUq0Rhq+5AI+xcq04ZEL+q58PQpWmQgeJaVGC6AV1M8pXm86YRzemSo06UKHUbgR3NfmayKGTTqYmLcpG1l4VUkrxoozKFYu1y0h4p+9xMgBcjtbnYAYs7VJxG4689h43diveMt278sH/V815J2VDKgcvoUyJWpPzDcFbPjwlNVVI2gaHqcX9pg44Q0QyCyGFkkVM+cz2E73CIUpsM+1G5EUZMIsYWuGgv0T4VUHfcuHab2VY/GQPO917sInina1U2ixTO3wRlU2cCVAFTiyDavzwIda6V2hiNyCIQAEeRG5BBDVTEeUYwG0gCYpSkkCth2QP3HQmXlMz9eo4fbQpAP8lvyKRRyc2fhqWpWv+uzVJTcmQ0KhY8quTbqPOJdIRlf/Ku4gq2iGYLmBl0ZFzA7XIeey9KJWJPX84BclUq+lGkRc2czmgGvibv3inQiEV4dHA+MEB24eoMRwOYpZbVitgNyZ9a1roMTswTWCV3Lszz9TSmlighHqfaQHQ9MAqoaaxnsCJ56lqvKISiz1sioU1P1QzPSMQKcJuvEp4AGe3nnb80QzzNDqu8yK6Ka9HYKx09VNZtjmMjT8U/VgSrL0WTRNGApiObU7dwkXZSwJZZWAtWbqaABOLio4D35l0I7sbiqu/k/eIqCrd24fBpB+jELDD26wiW9cG20whw9JGP5iDaJKa+nNvTzNVuha1y0hM824+rCYlToRG5Gi9LdGOYnX+Yue9OAnkfjSGJNg/Ey4xc/P4J107rJmFogQ/48HmBGuiyx30WTuHAGHPdr9EfxsA9bs8s/6aNBk8/Jw1gxQ02mEmtqB+i4HunZlQ5WNFtepOwA4RnMtZeX5dn+vciMITev1qv2j4X1pBtrR9a9AvE0EOBslfjuvTFCh/3m4qIwkP7BmK2D3P2rPMi3fYfr52vtVIhRwb7IpzHN6UCQ0e5QY5gnoFisWLFpsqtVSn9nUzowJe8JlA+Grm9PTa7TsmJXH3dY7PCLTX1qFylRkAaSO/HwbOf4DuOTeelswux+CaGmh+5rjgduRifVMMtGS472ZZrrS6GPMSMMMeOAqFp4q3rHBaEPO1YJZaQoe4AmiVE0sthKhg3G1d/EnMNsWrMfNM4nkqXrQWQD/BGpsqkBoByBVe4yYtvkNcS9MFgJd2GY+NyMYuoWSSoZdCOa3190LbZIIQ0E9NtX7XzCwNSMViBQc+REx0PHnclzL9MJ7DQugQ73I94RwakZWw0zIalWKUbobBpKyXtlAH5fMcj0wZmR66FNdhONxr0XiY+NOcKdzNk7i2UWmBizVQeNKVuocP7RY+cNRoNDugygHqG4id0JO006yaquMNG2Zb3O6zDw56boM+vEuFGtx/X4ZDFGg3qSDP1jqSIG3GFJ4UeqBKfBL2r0PXstLQGgoS/nxttDTaYu6hFGZZ/roopz5Ew+W8ZyVIftd3izA2FOEbuLIgOs71moE4WRtE6j20+9oP05KUsSZHcSub+T7yljb15a9qSZZHTdngZZefkzQwMKEiQszBK4bP+SpdfJa9/35+lMs0iJgLoVb9+5V0om4xitRqWla9k9M0acTFcnJ2sYMD4wpa98tsl0cOrN+P9S2RZZfXh5WVem1pPjb2ueIAbodDXLBlOjxYej3XQ1YSQba6GkAmzQI8RcLq+zOKsrrah1zK4Fmx/e1Z9lcHxvNbNKV+vzmzNBgbOPtXsA6kc9b/yC53lZHenzd8P7EbjBWZVw9ZeYhnb92/pKigE6LEel20L6NsazCHiWlQBf1+v19In1+nrdJclsFEepO2ioHDLmA2Boux/kt9bTOw1jD9tZ9UQKUr4KuU0er3LuJs/StKzqquX+LamQVQWBLcP494muEaCnQjvdIjhkyjrfGaSOK/wnAH0xprdMo/9Zww+JcKl08W57+c96m6SacLNa37S68vLmoj1kM+Pd8thPnSY/Z6185J4Zrj+Nk5VdH46pFcua05BfNKd5SqY/OtTg0W7+rA9/HLGwHkP4ExL+ozUQlCBmu0Eqp79fbF8NhojMX6+GnnWYwPHsOj9POpl3BPOeY3Y/UftXWdL2dyJ9yhkGXupOhvfTYrWEbAPz0RcKmopXqyjwJ8n5uHcR+ucH/Z7IIKK9vj7Qgkeh15ftDAceOMgyVz/n1Wq7TDHPkP5/u1qdF8czaPKJBm55hwnWcXPdvqopJf9xAHUWOPIG/cEgAHg0bQOG1TpV2nF6ZqDPWr44oAPyiCIFivtD1hhRft4FChXIvPrFP3mTDst91TJRwfm2rDGizw6Bagku7JYpo/WugiBTWkdO7t6ZjRQDqSFLAGP9UKchGcO3EcvtHbD1Uk/8BHfqYvNS3Gi2E1WIL4DtjdaVKVWlKpeFgK2Io2JEB+pbSPktgxSMVNl680vWSVTlShvQo7SobWB/VhUW8Odu0kkHk7YvVekFDXqUwqmCPXZNlfsDGi2d34FtCKVABnDpNGsb0p+CPslKyRy2/du+/QHc2aWm1IBN0Kyfp0PiHMDMqtEEaeuT9q89RrkFUL2zC+2YtiGbTBHaPuhXrhgOUYPYfgdTr/GdXYgR6rCWVZLDyxIq6q65p9DmkG3f4JEX5Km7T9Dy4WjYhZfqkI1qWom6Ug3LJRrjnVtY3D24syOGl+pYZ+VIgTo1bTf4ZHcFNdBpAWD9muD43Khr4w3ANFzLMfB7t4PBXg2AYdfk/O1zEr53ow1ai2RoJV+GPaGhlXob7M6eZr5F4YLcl9LpNJmM/3sJoc14CsgHG3Wf/9QqfVtCSKR/vOik2eFf4xt83sX79xB2h7DKgPw0pBQxe9hy3/m3rMUD3gR2YGhY+wqKXK2277B895bO8KfIPyIKPasAbLvxXWFvgnYxa+gBi114VLiuDGxkW0+2MQ+4yUaS3X9oxh11bUo1XPtnM+9cS2QX7q2m0CP1K4/Bheet37s2ahTjZ3BdeF087IZtqtwc/0DjC8/fh9/4xhevwKq21uCMXJm2DAZ21XY2kSa9VJcLOkNmgzVHhdudrUStfWxIj/RazwjDux8U/txBV7gFs4Ix9wDn1IwvCsuOUTAbdkR4A6zppViHKsIv9IrDxqPozwF1dNlmVKAvs1Lz1lNtheYhdRuxi7ZwhWJ94r1+PoNyWzuvTmlRv/sTVAWaEq61TN79BqNCM7rkzrZdXLtmNKmeRlbo0LCHxFsor+kvIiu4gtEEufUBVwtti8VHV68q1GBcb739A9LUQ6SbXqiIZeALrlIrUZym8Figp5jRuVyp2gPWP/EDEoLqH6H9HH2lkCu4wkQoLA4uUN9kNWT7sqXqU0JnZRnin4FVrZWkkrrhYV2sGDCjvaggHJQUfDnd2h1C2bp3Lqzg6xN0GthqL78cFsJFl2uxoCxVlnK6JFoVaY4mWd8ld1aAYpqPkL4yt4a1X5gU94UzRseE65iu66Wl796eKz4yjeTEkWNtSGhQPCv5Lew+ZXZhY4vyWkJn4D8qWvhG4rNDud0stlZ9rtV4eUfjvJe949vMdjbrnfMbjEE/DBJvLw8y8/i02okVLaa+qjZ1aBJxecaMxT1dHJ4U6c1UpyOG8fAzU9gptq7AxMJxHEcZ+1wo2FEouBqGsjsYiKXFt1uMYZWM1bDQ6DcAVzU8B1fKZlYtuAr3I0mjYeHGq2ZFOL/F+CwL2jn5lAuuHHSOasnjetQKPb8UssRLUT4899QX1QAt+YJ9/oGaCqHhL8EX0vLzNx80bN43rqg9kjbGbh3oLKnce4iX6sLVGwVJY3/L31lBIWlu/gEEB+lFOwRfT28WJAWpu0CIQBjH0gb1n4CNTgkwEfhxf9d18ZuKFvdff5Xo8N7IbMjWnc84axL0UGe1i81HKwgjul1Xe+T/crvYgxBN5kn8IIsbFomvi1DW0+FjsFNXLWsFsbkECHmDvzn4coMQhZfT8Xi6hO3e6KgKu+uo0mIaPNRx3fIOE1988cUXX3zxxRdffPHFF1988QWH/wHtB6N2fV/adQAAAABJRU5ErkJggg==", // Replace with actual image URL
        },
        {
          _id: "tech2",
          image: "https://t4.ftcdn.net/jpg/03/22/95/69/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg", // Replace with actual image URL
        },
        {
          _id: "tech3",
          image: "https://cvbankas-img.dgn.lt/companylogo_4_16590763/oxylabs.jpg", // Replace with actual image URL
        },      

        {
          _id: "tech3",
          image: "https://sdtimes.com/wp-content/uploads/2020/04/1_oBm_3saYz4AI_MS6OekdFQ-490x197.png", // Replace with actual image URL
        },
        {
          _id: "tech3",
          image: "https://wphix.com/preview/nerox-react-prev/assets/img/features/next-js.png"
        },
    ],
    summary: "Successfully Scraped real Google Shopping data and results using Oxylabs, enhancing the user experience with React Skeleton Loaders for elegant loading screens during data retrieval. Employing advanced caching techniques in Next.js 13, I ensured lightning-fast performance. My project boasts a fully responsive design crafted with Tailwind CSS and harnesses the power of Server components in Next.js 13 for efficiency. The use of the new App folder structure and creation of Next.js 13.4 API endpoints in the '/app' directory with route.ts files demonstrate my commitment to staying at the forefront of technology. To make it accessible to a wide audience, I deployed the final build on Vercel",
  },
  // Add more projects as needed
];

// Define the Projects component
type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <a href={project.link} className="hover:opacity-80 transition-opacity">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-100 xl:h-80 md:h-72 object-contain"
              src={project.image} // Use the image URL directly
              alt=""
            />
            </a>

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Project {i + 1}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-cover"
                    src={technology.image} // Use the technology image URL directly
                    alt=""
                  />
                ))}
              </div>
              <div className="text-center">
              {project.summary}
              </div>


            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

// Render the Projects component with the projects array as a prop
function App() {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
}

export default App;
