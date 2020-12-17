import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencesService } from '../api/experiences.service'
import { IExperience } from '../shared/models/IExperience';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {

  public experience: IExperience;

  constructor(private route: ActivatedRoute, private experienceService: ExperiencesService) { }

  ngOnInit() {
    this.getParams();
  }

  private getParams(): void{
    this.route.params.subscribe(params => {
      const id = String(params.id);
      console.log('id Experiencia String', id);
    //  this.experience = this.experienceService.getFindByIdLocal(id);
      this.experienceService.getFindByIdRemote(id).subscribe(response => {
        console.log('response detalle', response);
        this.experience = response.experience;
      });
      
    });
  }

}
