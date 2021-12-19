# 🌳 Coffee Forest ☕️

<p align="center">
 <img width="500" src="https://user-images.githubusercontent.com/61823846/146687851-b40f733c-7df7-420c-83db-eb2402c57f4a.png">
 <img width="2798" src="https://user-images.githubusercontent.com/61823846/146688031-bd9acae0-d723-4471-9d2e-025149eb21ed.png">
</p>


**☕️ Service**

[**CoffeeForest**](http://3.36.169.215/)

**🌳 Figma**

[**https://bit.ly/3m3SzJx**](https://bit.ly/3m3SzJx)

**✍️ Notion Page**

[Coffee Forest](https://www.notion.so/Coffee-Forest-ffefcee274c14f00a161e5e4667a4a4b)

**📚 Stack**

```
Language : JavaScript, Java
Frontend : React, styled-components, Redux, Redux-Saga
Backend : SpringBoot, JPA, MariaDB, Linux
기타 : JWT, Nginx
AWS : S3, CloudFront, EC2
```

---

**📚 Overview**

커피포레스트는 규모가 작은 기업에서 활용할 수 있는 오픈소스 근태 관리 시스템입니다.

출근, 퇴근부와 간단한 일정 관리를 수기로 작성하거나 엑셀 등의 부가 프로그램을 사용하는 기업을 대상으로 아래와 같은 서비스를 제공합니다.

- 🕒 출근 및 퇴근 시간 기록 및 관리
- ⛱ 연차 및 반차 등 직원의 휴가 일정 기록 및 관리
- 📅 기업의 특정 스케줄 및 이벤트 기록 및 관리
- 🏢 기업 등록 및 해당 사원 추가
- 추후 React Native 앱으로 배포 예정.
<!-- **Overview** 

해당 프로젝트는 규모가 작은 기업에서 활용할 수 있는 오픈소스 근태 관리 시스템이다.  
현재 출근, 퇴근부와 간단한 일정 관리를 수기로 작성하거나 엑셀 등의 프로그램을 사용하여 작성하고 있는 기업에서 활용될 수 있으며,    
아래와 같은 기능이 제공될 예정이다.    

- 출근 및 퇴근 시간을 기록하고 관리할 수 있는 기능
- 연차 및 반차 등 직원의 휴가 일정을 기록하고 관리할 수 있는 기능
- 기업의 특정 스케줄 및 이벤트를 기록하고 관리할 수 있는 기능

본 프로젝트는 기본적으로 웹 서비스 형태로 제공될 예정이며, 추후 React Native를 활용한 어플리케이션 개발 계획이 있음 -->

***

**How to use**

### 🔒 JWT 로그인 및 회원가입

- JWT Token을 이용한 로그인 처리.

- 자동 로그인 및 로그아웃 처리.
    - 다른 브라우저로 접속해도 로그인이 유지됩니다.
    - 로그아웃 이후 모든 브라우저에서도 로그아웃이 완료됩니다.
    <p align="center">
     <img width="70%" src="https://user-images.githubusercontent.com/61823846/146686456-b4187e59-28ba-4b04-b019-4d589ae7e26c.gif"/>
    </p>
### ✍️ 기업 및 사원 등록

- 직급에 따라 회사를 등록하거나, 회사를 선택하여 사원으로 등록할 수 있습니다.
    - CEO : 회사 등록.
    <p align="center">
     <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686465-21a87cee-ae4a-4938-b5b3-3f5efd236c45.gif"/>
    </p>
    
    - EMPLOYEE : 사원 등록.
     - 등록 후 CEO(관리자)의 수락 이전까지 대기중 상태를 유지합니다.
    <p align="center">
     <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686476-3e0bd231-a137-400b-b0d8-9fdf5519704a.gif"/>
    </p>
    
### 📅 주간/월간 스케줄 추가 및 확인

- 주간 및 월간 스케줄을 확인.
    - 개인 주간 스케줄 확인
    - 월간 스케줄을 통해 팀원간의 스케줄을 확인.

       <p align="center">
        <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686489-2206a39a-c34d-409f-9bc0-18e6d12c35bb.gif"/>
       </p>
    
- 출/퇴근 시간 및 일정 추가.
    - 버튼 클릭으로 출퇴근 시간을 기록할 수 있습니다.
 
        <p align="center">
         <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686348-b84ddac2-6858-4169-9b0f-813eba472d62.gif"/>
        </p>
        
    - 일정 유형(외근, 회의, 연차), 시간, 제목을 작성하여 일정 기록.
        
        <p align="center">
         <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686510-c6298aa3-28b1-4eb0-8190-3c4b531237d7.gif"/>
        </p>
        
### ✍️ 근태 설정

- 관리자(CEO)
    - 근태 설정
        - 출/퇴근 시간, 탄력근무제, 연차 및 반차 시간 지정과 같은 근태 설정이 가능합니다.
            <p align="center">
            <img width="70%" src="https://user-images.githubusercontent.com/61823846/146687300-d0d5ffe0-562a-462e-93b9-057633c844d5.gif"/>
            </p>
            
    - 사원 관리
        - 회사에 소속된 사원들의 탄력 근무제 시간 설정 및 연차 관리가 가능합니다.

            <p align="center">
             <img width="70%" alt="사원 관리" src="https://user-images.githubusercontent.com/61823846/146686540-8a8d7c7d-cab7-4039-840e-1de12f9503fa.png">
            </p>
            
    - 일정 승인 대기
        - 요청된 일정 승인 및 거절할 수 있습니다.
            
            <p align="center">
             <img width="40%" src="https://user-images.githubusercontent.com/61823846/146686548-c74a23d9-46c8-4a25-9ee3-d715504a3925.gif"/>
            </p>
            
    - 사원 수락 대기
        - 요청된 사원 등록 리스트 확인 후 수락 처리가 가능합니다.
            
            <p align="center">
            <img width="70%" alt="사원 수락 대기" src="https://user-images.githubusercontent.com/61823846/146686556-b52c2536-bbaf-41f3-aea1-791fd2a77069.png">
            </p>
            
### 🙋🏻 개인 정보 변경

- 프로필 사진 설정

    <p align="center">
     <img width="40%" alt="회원 정보 수정" src="https://user-images.githubusercontent.com/61823846/146686565-400c68f0-4619-4b58-9d58-fee326cd468b.gif">
    </p>
    
- 개인 정보 변경

    <p align="center">
     <img width="70%" alt="회원 정보 수정" src="https://user-images.githubusercontent.com/61823846/146686573-b6e815dd-ca78-4533-bdc5-0f64afc4f66f.png">
    </p>
    
***

**📚 Members**

*Client* 
- *Jungeun Park* - *https://github.com/jungeun-p* 
- Position : Front-end
- Git - [https://github.com/jungeun-p/coffee-forest-client](https://github.com/jungeun-p/coffee-forest-client)
    
*Server*
- *YongHwi Kim* - *https://github.com/yh0921k*    
- Position : Back-end
- Git - [https://github.com/yh0921k/coffee-forest-server](https://github.com/yh0921k/coffee-forest-server)

***
