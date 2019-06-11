import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

getQuestion(){
return this.http.get("/api/question", {responseType: "json"});

}
getScores(){
  return this.http.get("/api/scores", {responseType: "json"});

}
addScores(newScore){
  return this.http.post("/api/scores", newScore,{responseType: "json"});
}
}
//get question
//get scores
// post scores

