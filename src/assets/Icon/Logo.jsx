import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="158"
      height="18"
      fill="none"
      viewBox="0 0 158 18"
    >
      <path fill="url(#pattern0)" d="M0 0.604H158V17.758H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00097 0 0 .00892 0 -.004)"
            xlinkHref="#image0_519_1220"
          ></use>
        </pattern>
        <image
          id="image0_519_1220"
          width="1033"
          height="113"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAkAAABxCAYAAAC3Ofo+AAAACXBIWXMAAC4jAAAuIwF4pT92AAAVXUlEQVR4nO3dT1Ijx9bG4dcOzzSAuwLk2fUIvALkFYBXQPUKGs+uRy1GGjasoIsVWKzAxQo+MdLwSjuAiOtxf4Ojamgamn9V52Rm/Z4Iot0OWycRRanqrcyTP3z+/FkAAAAAgC/Gm6/J5u/tn3uStl7wOmtJq80/N5KuJS02X9dvGSDQlx/+959/T6IHkZnFaLbkF/pp483XkOV08p/0/PrtByK6sydpu8fX7/tnNunxtaU8j7m+f6aPaTp4jaixl26l25uLPkx6fG0pz9/D1E16fv0h/8wmd75eGgS81o3s/W7ufA3Ntuz97kuJx/Sk59e//uF///n3saSpfH4RSvDbaLZsogeRgamkD9GDCHIj6VT2HuSi7ylFl+r/hDY0jaT9Hl+/758Zx9zXKkmfAuqeb2q/VaN+j8ehOlG/nyX8HuaHn1l3xpION18pnb8uJM1l59VV6Eh8TCT93ePr32xqlBQU9H4e+HE0W57KfknOey4GDMGFLA2dBo8DQD4q5R0QAEAuxpKOZTeM/5X0UWkFBJJ0IPtM+K8sKKjETK232JKFLryHL/CjJI1my+vRbFlJ+k3SVeiIgDytJf0uS6NXsUMBkJE92cwjbwQEAIZkIrtRbIOB3dDRPN++LDBYSarV77T8ku3I3j880493/zKaLZvRbLknm952EzMkIDsnspP2PHogALKyJ3tK5L3cj4AAwFBUshvsv2VP6HO1JelI0v/JPjcmkYPJ1IFsFgme4ceH/uVotpzKLl4uXEcD5OVS0q+ypQW5NCgEkAYCAgDoTyULBz7JniKXZF8WejQiLHipj+I9e5YHQwJJGs2Wq9FseSibQr32GxKQvBtJ71ReExQAPqICgivxFAVA2dplnyWGA/cRFrwO/Qme4dGQoDWaLeeyC5qT/ocDJO9c1vSmjh0GgExFBgQTMesJQJnGsnPrXyo/HLivDQtqcfP7HFsa5laTL/JkSCB9aWw4lU2tvux1RECarmSNPStxkQ3gdQgIAKB7U1lDwtR2KfB2JJtFwYyxp+0qpmlwNp4VErRGs+ViNFtOZFOtaWyIIbjRbWPCJnYoADK2LQICAOjSnmzZ54fogSRkS7buvpHNrsDj3osePY96UUjQGs2WtezAO+9yMEBiLmQfQNPgcQDIGwEBAHTrWNbpP5etDL3tywKUw+iBJO5UbCv5oFeFBNKXJQiVbAr2VWcjAuKtZQ072+Y3APBabUDgfSFLQACgRNuyxnMfoweSgS1Zj4Y6eBwp2xK9HB706pCgNZotm9Fs2TY2ZAkCctcuLZhHDwRA9ggIAKA77dLPg+Bx5OZINquAG+GH0Z/gAW8OCVqbxoZ7sinaQG4uJf0sW1rAhTWAtyIgAIDutAEBywteZ1c2O5ap9Q87Eg0fv9JZSCBJo9lyNZotD2VTtdddvjbQkxtZI86JWFoAoBsEBADQnUoxfV1K0279R1DwsI/ivfmi05CgNZot57I3+aSP1wc6ciZrwFnHDgNAQQgIAKA7laRPIiDoCkHB9zViWYaknkIC6Utjw6lsCvdlX3WAV7iSNdw8FhfUALp1Kv+A4EbWaJXzGYCSVLKAAN3aku0MQVDwrS3Rl0xSjyFBa7MEYSKb0k1jQ0S6kfSHbte1AUCXatm6Rk83YrkUgPJMREDQt0YEBQ/ZF40M+w8JWqPZspZN7T7zqgnccSE7EQ7+lx5AL2rFBQQL57oA0Cd2mfLB0oPHvZfN0Bsst5BA+rIE4Vg21fvKszYGay073g7FkzYA/ahFQAAAXRiLJoWe2un1rMP/Vi07HgfJNSRojWbLZjRb7smmfrMEAX05EUsLAPSrFgEBAHRhW3bDmlNAcCXrvXb/Kyc74lr5IYMOUH6KLD6aLU//+fOXuWwK+EHkWFCUS1mzm1XsMAAUrhYBAQB0JaLx63Ndym6kF7Imsc0z/7892dPoPdm5e7/zkXVjV/b+H0cPJDHt+1IFj8NdaEggWWNDSYf//PnLRHbBtRM5HmTtRnZyq4PHAaB8UxEQeLrSMC9eV9EDAJxU8j+nPuVc9iS50et3j1lsvtoeC9uy8/ih0vt+38u+V/pBfO1I9r7UscPwFR4StEazZfPPn7/syS4CPkSPB9k5k120swUYgL5V8v+cGnJAIL3syR2AvIyVTmPptWwstfq5pryW3YTPZfc81ebPVB6S1rKfB9fTX/uk28BnEEJ6Ejxm09hwKuln5beeBzGuZI0Jj8UJDUD/KvlvyzX0gABA2VLoQ7CWbdc+loUEHteU15ta403ttUPNp7Tr8PGtQfUnSCokaI1my9VotpzIfmFobIiH3MgaX9KYEICXSgQEANClY8X2IbiRNboeK3Y6eb0ZQwpN3fc18O3/HrGjAS05SDIkaI1my1r2C3MWOxIk5kJpTU0DUL5K/gGBREAAoFxj2VLRKJeyh02RY7jvVDami+Bx1BrQU/MXOFBax0tvkg4JpC9LEI5lU8qvoseDUGvZcXAolhYA8FMpJiB4JwICAOU6VdwygxNZCLsKqv89K9m17h+BY9jSMJvFPscH2bFTtORDgtZotmxGs+We0piGA3/tVLAmdhgABqZSXEBQB9QFAA8TxWx/fiM7v04Dar/UqaRfFXff80F27Y1vzVX4e5NNSNAazZZtg4/oaTjwcSlrZDkNHgeA4dlTzLImAgIApZsG1Gx7vNQBtV9rIbvviZpNPQ2qm7riGzxmFxJIX5YgHMqmnqfQCRTdu5H0u9KdCgagbG1TVO+psAQEAEo3kTXH85RzE9hr2dgjgoIjFf7E/A12VfDndZYhQWuzBGEsm4qOcpzJTkhFJ3QAkkVAAAD9mQbUnCjPgKAVGRRMA2rm4ki2LLE4WYcErdFsOZVNSb8MHgre5kq29upYNCYEEIOAAAD6M5H/LIJSmsC2QYF3j4IjsdPB97Q7UhSliJBAkkaz5Wo0W05kU9RpbJiXG1lDyj2VcRIHkCcCAgDol3fH/DOVdX5tgwJv7HTwuC0VuGVkMSFBazRbtt0mz4KHgue5kP28IpqDAUCLgAAA+jWW744GVyrz5nYh/+0RK+d6uSmuP0FxIYH0pbHhsWzqelQ3UHzfWtZ48lAsLQAQa1vWA4WAAAD6UxVez9OpfJdZ78iu2fG4AxUUShUZErRGs+ViNFvuydI2liCk40SWJjexwwAAbcvORTvOdQkIAAxN5VjrROUvYa3ke39DSPC0j4pZDtK5okOC1mi2PJXdlF4ED2XoLmUNJqfB4wAA6TYg2HWuey4CAgDDsie/MHatYSxjXcn3+yQkeJ65CuhPMIiQQPqyBOFQNsV9HT2egVnLGkpOZCc0AIgWGRBUzjUBIFrlWGuq4SxlncrvvmZLBAXPsaUCZksPJiRojWbLZjRbjmXTkNC/M1l6PI8eCABsEBAAgC+vm8u1hjdTa+pYi5DgeXaV+WyWwYUErdFsOZVNfaexYT8WssaRxxpOmgsgfQQEAOBrLL+lBlOnOimp5TebYOJUpwTvlXGoMtiQQJJGs+VKPOHuy1zlN4wBkJ9GBAQA4MnrRulGw72ur53q7MhCn9x47gRxVy2bUZ2dQYcEAIBBqUVAAADeJk515hru7NXasdbEsVZXGtlud962ZD+b7BoZEhIAAIaglnTkXJOAAAD8nqRmvQb8jVby28UtyyfjsuMjYqe7LPsT/BQ9AAAAelaLgCB3Y5W71rhRAZ2wgUdsy6cfwVosc51LOnCok2tIINnnciP/WYVHsuMzm7CAkAAAULJaBAQl2JH0IXoQPWqiBwD0xOuGsnGqk7K5pE8OdfYdavTlWrdBwZZz7Y+bulmEWSw3AACUqhYBAQBEIiTwcy2/XduyW2N/x0K2+1qERpm8d4QEAIAS7cs/IJCG21kbAB4ydqrTONVJXeNUJ+clB5I9RDgLqLulTK4TCAkAAOhOrTy3hwKAPnjcTN7IGvfBbyp7Fk/Dn3Asv5kXd+0rgx47hAQAAHQnm6cEAFCILNZ4O1k51cl9JkHrUBYyefuwqZ0sQgIAALqV5XZHANADj5vJlUONXDTRA8jMSnE367USnnlISAAAQPfeK/GnBADgwKOD/MqhBsrVSDoJqNvOPExy6QYhAQAA/aiV8FMCAECRPNbZTxxqeJpKugiom+zMQ0ICAAD6QX8CAOgfPQm+dh09gExVktYBdY+U4NbJhAQAAPQn2acEAFAIborRhWvFNTI8VWLNIAkJAADo13sl+JQAAAB8ZSHbGtFbcv0JCAkAAOhfck8JAADAN2pJ5wF1dza1k0BIAABA/7ZkH/7JPCUAgEIQwKJrlXwaQN53IGuiGI6QAAAAH/QnAIDuEb76W0UPwEFUf4IPSmD3CEICAAD8JNnFGABQjH2HGiuHGtFWivu8nit4C2VCAgAAfNGfAAC6M4keAIo1l3QSUDd8C2VCAgAAfNGfAMBQXDrU4Fx6a+JUZ0jbTk7lcxzfF7pEkZAAAAB/9CcAgG7sRg8gIWOnOgunOqk4lLQOqBu2hTIhAQAAxrtBEf0JAJTO62Zy4lQndV5L2YY0k0Cy7/cwqHbIEkVCAgAAbE/kifyDAvoTACiZ180k51EzcaoztJkEkn3P7wLqhixRJCQAAAzdueyJ/kLSsXNt+hMAKFnjVCfqKW9KtuWz9OLKoUaqatk1g7fdTW03P3kWAwAgMW1A0KplT2KOHMfQ9ieonvjvhuxK/gGOl1X0AIAerZzq7Mtukoc2Df4ur6Bk5VQnVceymSvevTAONrVd+hkREgAAhup+QNCKuAA4kj1xqx1r5uRafk8kAXRnJVvGteVQ61DDPod6hQSNU51UXcuuHRr5HNd3fZTTUg+WGwAAhuixgEC6vQCgPwEAvJ3X+vXKqU6KtmVPmj0MsR/BfQvFHW9zjyKEBACAobnQ0x/uC9neyJ7oTwCgRI1TnX35bQGYmsqxVuNYK2VzSWcBdV1mLxASAACG5ErPv5g6lQUKntr+BABQisax1tSxVkq8erZ4fyam7ljSZfQg+kBIAAAYiitZU8KXNLaqJK37GMx3HGnY02YBlKWR3/KtIw1vNkElacepVuNUJyeH8l+e2DtCAgDAELwmINDmv4/YWov+BABK4rKOemPqWCsFU8danj/HXFzLri+KQkgAACjdawOC1kLSH52N5nnoTwCgJI1jrSMNJ2Q9lt8sgiux/eFjIq4TekVIAAAo2VsDghb9CQDg9Wr5TskewrlzW76zCIbwnr7FqWznpCIQEgAAStVVQNCqRH8CAHgtz6nq+/Jr5helllOn+w2WGjztWHbtkT1CAgBAidbqNiDQ5rWqDl/vuehPAKAEtXO9qco9d1aSDhzrnavbz9NStdcJ2TcyJCQAAJRopX4uaBpJJz287vfQnwBACRr5zsbakj39Lu3cuSf/qf+1c72cLVTALBZCAgAAXmYq/32R6U8AoART53o7Kmvbvm35LzO4VFnvoYda0ln0IN6CkAAAgJeL2BeZ/gQAclfL/9y5q3KehDey78fT1LleKbLuT0BIAADAy13LggJv9CcAkLuIWVFHyj8oqOUfEDCL4G0myrQ/wU/RA8hQ9c+fv0yiB5GB1Wi2rKMHAQA9amT9CT441mz7E0xEEykAeTqVPWX1nDIvWVCwLZuRldP5c1vWW2E/oPY0oGZJ2gcKf0cP5KUICV7uKHoAmbhU/oktADxlKrsA8Hy60/YnqBxrAkBXrmUhwaeA2geygPdQ1uA2dduKWWIgMYugK42kPyR9DB7Hi7DcAACAt6E/AQC8TC3fnQ7u2pV1oI9YMvYSE1mQEREQSHzGdOlU0kX0IF6CkAAAgLdZKeZiiv4EAHJWBdbekvSX7Dya2haJ27Jx/S3/JRmtM+Ux0yInleKCsRcjJAAA4O3m8t/uqO1PkNoFLgA8R6P4p6vvFRf0PuRQNsvhfeAY1qIXQR/a/gRZNDIkJAAAoBsR2x21/QkAIEeV4m+atmT9ERayKf4RJrLQ5C9JO0FjaFXKq7FjThaya4XkERIAANAd+hMAwPNdK53z165siv9KNqa+Z2m1Oy2sNnUjdi+470w0K+xbLek8ehBPYXcDAB72NMwPnWNZaozhWMku+v5yrts+BSv1eBtrmNNfG+V97uTcj+dol2tFTrG/a0d2Tj2Vja3Z/NnF0/VtWZg8UXo7pl1pmOfZCJXs/BjVlPJJhAQAPGwpjYTcG2vFh2kue0rgfQE4l110lDhNdEfSh+hBBGmiB/AGnPvxXFPZjXNKN01bsvP4kSw0uNJtGLuQnWu/FwZN7vw5Vto3hTdimYG3tv9EVHPK7yIkAACge8fyvyDckU1jTH1bLwC4r23qluxNk+x8vqv0ZgB0oRKzX7ytZMf838HjeBA9CQAA6F67zta7P8GBMmmKBAD3rBTXOHDI/pDNRIO/RtJJ9CAeQkgAAEA/oroYf5TNYgCA3CwkvYsexICcix1yok0VvxXoNwgJAADoT62YLsZzsS4aQJ5qERR4OFc6O0sMXSVpHT2IuwgJAADo17Gs4ZWntj8BAOSoFkFBnwgI0tL25EgGIQEAAP2K2gec/gQAclaLoKAPBARpSmqpDSEBAAD9W8iaQ3mjPwGAnNVK6MapAAQEaasVs0TxG4QEAAD4OFVMcyL6EwDIWS3pd/nvFlMaAoI8RCxR/AYhAQAAfir5NyeiPwGA3M1l2yMm1dwtI+9EQJCLtj9BaChGSAAAgJ+o5kT0JwCQu4Vs+dRl9EAyciPpVxEU52al4FCHkAAAAF/0JwCA17mWzSg4CR5HDi4kjWWfOcjPXIHHOSEBAAD+6E8AAK83lT0hD1+7naAbWRB9KAtVkK+pgmbOEBIAABCjkv+aQ/oTAChFu/yAWQW3LmXvyWn0QNCZkP4EhAQAAMSgPwEAvN1U0s8adq+CtWwHiIlsPTvK0S6xcUVIAABAnEYxT8HoTwCgJCvZjdRvGtYShBvZZ8iebDkZyuTey4iQAACAWFPFPAGjPwGA0jSyG+Z3Knu7xDYcGMs+Q+g9UL5TSedexQgJAACIF7HmkP4EAEpVy26gf1dZyxDWIhwYsmM5zZQhJAAAIB79CQCge3PZMoRfZU9h3RvAdeRSNjtiLMKBIbuWU9NjQgIAANLQiP4EANCHhezmaiy72Y7YgvalrmTr0H+WBR115GCQjPZY7hUhAQAA6ZgqpukW/QkADMG17Gb7UNK/ZIHBudLpX3Ch22Cg3cpwFTkgJGku6azPAj98/vy5z9cHAAAAgNTtbb4mshkH+z3XW8ueCi9kM8manusBz0ZIAAAAAADf2pPNsprc+3vrsSDhSl/3DWg2fy42/74RkLD/B4tIayf5PSfSAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
};

export default Logo;