import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { AdDirective } from './ad.directive';

@Component({
    selector: 'app-ad-banner',
    templateUrl: './ad-banner.component.html',
})

export class AdBannerComponent implements OnInit, OnDestroy {

    @Input() ads: AdItem[];

    @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

    interval: any;
    currentAdIndex = -1;

    constructor(private componentFactoryResolve: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        const componentFactory = this.componentFactoryResolve.resolveComponentFactory(adItem.component);

        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
        componentRef.instance.data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
