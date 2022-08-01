import { JsonPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';
import { PatientApiService } from 'src/app/Services/PatientApi/patient-api.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-show-diagnosis',
  templateUrl: './show-diagnosis.component.html',
  styleUrls: ['./show-diagnosis.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ShowDiagnosisComponent implements OnInit {
  patientDiagnosisList: any = [];
  dataFlag: boolean = false;
  patientID: number = 0;

  toggleAdd: boolean = false;
  toggleEdit: boolean = false;

  tiles: Tile[] = [
    { text: 'Tile 1', cols: 2, rows: 1, border: '3px double purple' },
    { text: 'Tile 2', cols: 2, rows: 1, border: '3px double red' },
    { text: 'Tile 3', cols: 2, rows: 1, border: '3px double skyblue' },
    { text: 'Tile 4', cols: 2, rows: 1, border: '3px double yellow' },
  ];
  public data = [
    {
      _id: 'c9d5ab1a',
      subdomain: 'wing',
      domain: 'aircraft',
      part_id: 'c9d5ab1a',
      'info.mimetype': 'application/json',
      'info.dependent': 'parent',
      nested: [
        {
          domain: 'aircraft',
          _id: 'c1859902',
          'info.mimetype': 'image/jpeg',
          'info.dependent': 'c9d5ab1a',
          part_id: 'c1859902',
          subdomain: 'tail',
        },
      ],
    },
    {
      _id: '1b0b0a26',
      subdomain: 'fuel',
      domain: 'aircraft',
      part_id: '1b0b0a26',
      'info.mimetype': 'image/jpeg',
      'info.dependent': 'no_parent',
    },
  ];
  displayedColumns = [
    '_id',
    'subdomain',
    'domain',
    'part_id',
    'info.mimetype',
    'info.dependent',
  ];
  @ViewChild('outerSort', { static: true }) sort!: MatSort;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables!: QueryList<MatTable<Address>>;

  dataSource: any;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private patientService: PatientApiService,
    private cd: ChangeDetectorRef
  ) {}

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      cnic: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
    USERS.forEach((user) => {
      if (
        user.addresses &&
        Array.isArray(user.addresses) &&
        user.addresses.length
      ) {
        this.usersData = [
          ...this.usersData,
          { ...user, addresses: new MatTableDataSource(user.addresses) },
        ];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: User) {
    element.addresses &&
    (element.addresses as MatTableDataSource<Address>).data.length
      ? (this.expandedElement =
          this.expandedElement === element ? null : element)
      : null;
    this.cd.detectChanges();
    this.innerTables.forEach(
      (table, index) =>
        ((table.dataSource as MatTableDataSource<Address>).sort =
          this.innerSort.toArray()[index])
    );
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach(
      (table, index) =>
        ((table.dataSource as MatTableDataSource<Address>).filter = filterValue
          .trim()
          .toLowerCase())
    );
  }

  saveChanges() {
    this.dataFlag = false;
    this.patientService
      .getPatientDiagnosis(this.form.value.cnic)
      .subscribe((data) => {
        this.patientDiagnosisList = data;
        this.patientDiagnosisList = JSON.parse(this.patientDiagnosisList);
        if (this.patientDiagnosisList) {
          this.dataFlag = true;
          this.toggleAdd = true;
        }
      });
  }
  AddDiagnosis() {
    this.patientID = this.form.value.id;
    this.toggleAdd = true;
  }
  EditDiagnosis() {}
  closeClick() {
    this.saveChanges();
  }
}

export interface User {
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}
export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    name: 'Mason',
    email: 'mailto:mason@test.com',
    phone: '9864785214',
    addresses: [
      {
        street: 'Street 1',
        zipCode: '78542',
        city: 'Kansas',
      },
      {
        street: 'Street 2',
        zipCode: '78554',
        city: 'Texas',
      },
    ],
  },
  {
    name: 'Eugene',
    email: 'mailto:eugene@test.com',
    phone: '8786541234',
  },
  {
    name: 'Jason',
    email: 'mailto:jason@test.com',
    phone: '7856452187',
    addresses: [
      {
        street: 'Street 5',
        zipCode: '23547',
        city: 'Utah',
      },
      {
        street: 'Street 5',
        zipCode: '23547',
        city: 'Ohio',
      },
    ],
  },
];
