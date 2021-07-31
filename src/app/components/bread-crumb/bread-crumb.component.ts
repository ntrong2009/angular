import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent implements OnInit {

  public breadcrumbs: IBreadCrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    // console.log('%c%s', 'color: #00b300', 'breadcrumbs', this.breadcrumbs);
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => {
      console.log('%c%s', 'color: #cc7033', 'event router change');
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      console.log('%c%s', 'color: #00b300', 'breadcrumbs', this.breadcrumbs);
    });
  }

  buildBreadCrumb(route: ActivatedRoute, url = '', breadcrumbArray = []) {
    console.log('%c%s', 'color: #ff0000', 'route', route);

    let text = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';

    console.log('%c%s', 'color: #f200e2', 'route.routeConfig', route.routeConfig);
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    console.log('%c%s', 'color: #aa00ff', 'path', path);

    const lastRouterPart = path.split('/').pop();
    const isDynamicRoute = lastRouterPart.startsWith(':');

    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRouterPart.split(':')[1];
      path = path.replace(lastRouterPart, route.snapshot.params[paramName]);
      text = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;
    console.log('%c%s', 'color: #d90000', 'nextUrl', nextUrl);

    const breadcrumb: IBreadCrumb = {
      label: text,
      url: nextUrl
    };


    console.log('%c%s', 'color: #1d5673', 'breadcrumb', breadcrumb);

    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbArray, breadcrumb] : [...breadcrumbArray];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
