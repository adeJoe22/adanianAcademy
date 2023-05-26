import React from "react";
import { AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StudentDashboardHome = () => {
  return (
    <Container>
      <Wrapper>
        <BodyComp>
          <BodyCompWrapper>
            <BodyTopComp>
              <IconAndText>
                <TopIcon>
                  <TopMainIcon />
                </TopIcon>
                <YourSubscription>
                  Your subscription ends on 25 February 2015
                </YourSubscription>
              </IconAndText>
              <UpgradeTag>Upgrade</UpgradeTag>
            </BodyTopComp>
            <BodyCardHolder>
              <MyAccountComp>
                <MyAccountHeading>
                  <MyAccountTextAndIcon>
                    <MyAccount>My Account</MyAccount>
                    <MyAccountIcon />
                  </MyAccountTextAndIcon>
                </MyAccountHeading>
                <MyAccountItems>
                  <MyAccountItem bg="#32a0f9" cl>
                    <span>Dashboard</span>
                  </MyAccountItem>
                  <MyAccountItem>
                    <span>My Courses</span>
                  </MyAccountItem>
                  <MyAccountItem>
                    <span>Profile</span>
                  </MyAccountItem>
                  <MyAccountItem>
                    <span>Messages</span>
                  </MyAccountItem>
                  <MyAccountItem>
                    <span>Logout</span>
                  </MyAccountItem>
                </MyAccountItems>
              </MyAccountComp>
              <CoursesComp>
                <CoursesHeader>
                  <CoursesAndDesc>
                    <Courses>Courses</Courses>
                    <CoursesSub>Your recent courses</CoursesSub>
                  </CoursesAndDesc>
                </CoursesHeader>
                <CoursesItems>
                  <Coursesitem>
                    <CoursesTitleAndBar>
                      <Course>Basics of HTML</Course>
                      <CourseBar>
                        {/* <LinearProgress
                          variant="determinate"
                          value={60}
                          sx={{ color: "green" }}
                        /> */}
                      </CourseBar>
                    </CoursesTitleAndBar>
                  </Coursesitem>
                  <Coursesitem>
                    <CoursesTitleAndBar>
                      <Course>Angular in Steps</Course>
                      <CourseBar>
                        {/* <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{ color: "green" }}
                        /> */}
                      </CourseBar>
                    </CoursesTitleAndBar>
                  </Coursesitem>
                  <Coursesitem>
                    <CoursesTitleAndBar>
                      <Course>Bootstrap Foundations</Course>
                      <CourseBar>
                        {/* <LinearProgress
                          variant="determinate"
                          value={30}
                          sx={{ color: "green" }}
                        /> */}
                      </CourseBar>
                    </CoursesTitleAndBar>
                  </Coursesitem>
                  <ViewAllComp>
                    <div>
                      <span>VIEW ALL</span>
                    </div>
                  </ViewAllComp>
                </CoursesItems>
              </CoursesComp>

              <RewardsAndCertificatesComp>
                <RewardsComp>
                  <RewardsCompWrapper>
                    <RewardHeading>
                      <Rewards>Rewards</Rewards>
                      <RewardsSub>Your latest achievements</RewardsSub>
                    </RewardHeading>
                    <RewardiconHolder>
                      <RewardIcon bg="indigo">{/* <StarIcon /> */}</RewardIcon>
                    </RewardiconHolder>
                  </RewardsCompWrapper>
                </RewardsComp>
                <CertificatesComp>
                  <CertificatesHeader>
                    <span>
                      Certificates <code>(4)</code>
                    </span>
                  </CertificatesHeader>
                  <CertificatesHolder>
                    <Certificates>
                      {/* <InsertDriveFileIcon sx={{ fontSize: "20px" }} /> */}
                    </Certificates>
                  </CertificatesHolder>
                </CertificatesComp>
              </RewardsAndCertificatesComp>

              <QuizComp>
                <CoursesHeader>
                  <CoursesAndDesc>
                    <Courses>Quizzes</Courses>
                    <CoursesSub>Your recent performance</CoursesSub>
                  </CoursesAndDesc>
                </CoursesHeader>
                <QuizItemHolder>
                  <QuizItem>
                    <QuizItemWrapper>
                      <QuizAndCourse>
                        <Quiz>Title of quiz goes here?</Quiz>
                        <QuizCourse>
                          Course: <span>Basics of HTML</span>
                        </QuizCourse>
                      </QuizAndCourse>
                      <ScoreAndGrade>
                        <QuizScore>5.8</QuizScore>
                        <QuizGrade>Good</QuizGrade>
                      </ScoreAndGrade>
                    </QuizItemWrapper>
                  </QuizItem>
                  <QuizItem>
                    <QuizItemWrapper>
                      <QuizAndCourse>
                        <Quiz>Title of quiz goes here?</Quiz>
                        <QuizCourse>
                          Course: <span>Basics of HTML</span>
                        </QuizCourse>
                      </QuizAndCourse>
                      <ScoreAndGrade>
                        <QuizScore>5.8</QuizScore>
                        <QuizGrade>Good</QuizGrade>
                      </ScoreAndGrade>
                    </QuizItemWrapper>
                  </QuizItem>
                  <QuizItem>
                    <QuizItemWrapper>
                      <QuizAndCourse>
                        <Quiz>Title of quiz goes here?</Quiz>
                        <QuizCourse>
                          Course: <span>Basics of HTML</span>
                        </QuizCourse>
                      </QuizAndCourse>
                      <ScoreAndGrade>
                        <QuizScore>5.8</QuizScore>
                        <QuizGrade>Good</QuizGrade>
                      </ScoreAndGrade>
                    </QuizItemWrapper>
                  </QuizItem>
                  <SeeResultItem>
                    <SeeResultWrapper>
                      <SeeResult>See Result</SeeResult>
                    </SeeResultWrapper>
                  </SeeResultItem>
                </QuizItemHolder>
              </QuizComp>
            </BodyCardHolder>
          </BodyCompWrapper>
        </BodyComp>
      </Wrapper>
    </Container>
  );
};

export default StudentDashboardHome;

const SeeResult = styled.div`
  padding: 10px 15px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  background: #32a0f9;
  font-size: 14px;
`;

const SeeResultWrapper = styled.div`
  width: 90%;
  display: flex;
`;

const SeeResultItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const QuizItemWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuizGrade = styled.div`
  font-size: 12px;
`;

const QuizScore = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ cl }) => cl};
`;

const ScoreAndGrade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QuizCourse = styled.div`
  color: gray;
  font-size: 13px;
  span {
    color: #32a0f9;
  }
`;

const Quiz = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const QuizAndCourse = styled.div``;

const QuizItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid lightgray;
`;

const QuizItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizComp = styled.div`
  width: 350px;
  min-height: 300px;
  height: auto;
  padding-bottom: 15px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  margin: 15px;
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 0px;
  }
`;

const Certificates = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: gray;
`;

const CertificatesHolder = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const CertificatesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 15px 0;
  margin-bottom: 15px;
  span {
    width: 90%;
    font-size: 18px;
    font-weight: 500;

    code {
      font-size: 14px;
      color: lightgray;
    }
  }
`;

const CertificatesComp = styled.div`
  width: 100%;
  min-height: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  padding-bottom: 10px;
  margin: 15px;
  @media screen and (max-width: 400px) {
    margin: 0px;
  }
`;

const RewardIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const RewardiconHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const RewardsSub = styled.div`
  color: lightgray;
  font-size: 13px;
`;

const Rewards = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const RewardHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const RewardsCompWrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const RewardsComp = styled.div`
  width: 100%;
  min-height: 150px;
  height: auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  padding-bottom: 10px;
  margin: 15px;
  @media screen and (max-width: 400px) {
    margin: 15px 0px;
    /* background-color: green; */
  }
`;

const RewardsAndCertificatesComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 0px;
    align-items: center;
  }
`;

const ViewAllComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  div {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      padding: 5px;
      border: 1px solid lightgray;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const CourseBar = styled.div`
  width: 70px;
  height: 20px;
`;

const Course = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const CoursesTitleAndBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Coursesitem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  border-bottom: 1px solid silver;
`;

const CoursesItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoursesSub = styled.div`
  color: lightgray;
  font-size: 13px;
`;

const Courses = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const CoursesAndDesc = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CoursesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid silver;
`;

const CoursesComp = styled.div`
  width: 350px;
  height: 280px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  margin: 15px;
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 15px 0px;
  }
`;

const MyAccountIcon = styled.div`
  /* && {
    font-size: 30px;
    cursor: pointer;
  } */
`;

const MyAccount = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const MyAccountTextAndIcon = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyAccountItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => (bg ? "#32a0f9" : "white")};
  height: 50px;
  font-size: 14px;
  color: ${({ cl }) => (cl ? "white" : "black")};
  cursor: pointer;
  border-bottom: 1px solid silver;

  span {
    width: 90%;
    text-align: left;
    /* align-items: center; */
  }
`;

const MyAccountItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MyAccountHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const MyAccountComp = styled.div`
  width: 300px;
  height: 320px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 15px 0;
    /* background-color: blue; */
  }
`;

const BodyCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: center;

    /* background-color: red; */
  }
`;

const UpgradeTag = styled.div`
  margin-right: 15px;
  padding: 8px;
  border-radius: 3px;
  font-size: 13px;
  border: 1px solid black;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (max-width: 350px) {
    font-size: 10px;
  }
`;

const YourSubscription = styled.div`
  font-weight: 500;
  margin-right: 10px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const TopMainIcon = styled.div`
  /* && {
    color: white;
  } */
`;

const TopIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 70px;
  background-color: rgb(0, 255, 10);
  margin-right: 10px;
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
`;

const BodyTopComp = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  margin-top: 50px;
  align-items: center;
  margin-bottom: 30px;
`;

const BodyCompWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 90%;
    /* background-color: purple; */
  }
`;

const BodyComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eee;
`;

const ProfileTag = styled.div`
  padding: 10px;
  background-color: blue;
  font-size: 14px;
  font-weight: 500;
`;

const ViewProfile = styled(Link)`
  font-size: 12px;
  cursor: pointer;
  color: white;
`;

const UserName = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const NameAndViewProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background-color: white;
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

const StudentProfile = styled.div`
  display: flex;
  align-items: center;
`;

const TopCompWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const TopComp = styled.div`
  display: flex;
  width: 100%;
  background-color: #32a0f9;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: white;
  @media screen and (max-width: 500px) {
    height: 70px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
