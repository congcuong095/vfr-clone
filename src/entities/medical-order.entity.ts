import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * @ORM\Entity
 * @ORM\Table(name="T_MEDICAL_ORDER_MDO")
 * @ORM\HasLifecycleCallbacks
 */
@Entity('T_MEDICAL_ORDER_MDO')
export class MedicalOrder {

  /**
   * @ORM\Column(name="MDO_ID", type="integer", nullable=false)
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="IDENTITY")
   */
  @PrimaryGeneratedColumn('increment', {
    name: 'MDO_ID',
  })
  id?: number;

  /**
   * @ORM\Column(name="MDO_BCB_VERSION", type="string", length=45, nullable=true)
   * @var string Numéro de version de la Base Claude Bernard.
   */
  @Column({
    name: 'MDO_BCB_VERSION',
    type: 'string',
    length: 45,
    nullable: true
  })
  bcbVersion?: string;

  /**
   * @ORM\Column(name="MDO_DATE", type="date", nullable=true)
   */
  @Column({
    name: 'MDO_DATE',
    type: 'date',
    nullable: true
  })
  date?: string;

  /**
   * @ORM\Column(name="title", type="string", length=255)
   */
  @Column({
    name: 'title',
    type: 'string',
    length: 255
  })
  title?: string;

  /**
   * @ORM\Column(name="MDO_END_DATE", type="date", nullable=true)
   * @var \DateTime|NULL Date de fin effective.
   */
  @Column({
    name: 'MDO_END_DATE',
    type: 'date',
    nullable: true
  })
  endDate?: string;

  /**
   * @ORM\Column(name="MDO_FORMAT", type="string", nullable=false)
   * @var string Format papier de l'ordonnance. "A4", "A5", "A5p" ou "18x21".
   */
  @Column({
    name: 'MDO_FORMAT',
    type: 'string',
    nullable: false
  })
  format?: string;

  /**
   * @ORM\Column(name="MDO_IDENT_PRAT", type="text", nullable=true)
   */
  @Column({
    name: 'MDO_IDENT_PRAT',
    type: 'text',
    nullable: true
  })
  identPrat?: string;

  /**
   * @ORM\Column(name="MDO_IDENT_CONTACT", type="text", nullable=false)
   */
  @Column({
    name: 'MDO_IDENT_CONTACT',
    type: 'text',
    nullable: false
  })
  identContact?: string;

  /**
   * @ORM\Column(name="MDO_ADDRESS", type="text", nullable=true)
   */
  @Column({
    name: 'MDO_ADDRESS',
    type: 'text',
    nullable: true
  })
  address?: string;

  /**
   * @ORM\Column(name="MDO_NUMBER_OF_PRESCRIPTION", type="integer")
   * @var integer Nombre de prescriptions.
   */
  @Column({
    name: 'MDO_NUMBER_OF_PRESCRIPTION',
    type: 'integer'
    })
  numberOfPrescription?: number;

  /**
   * @ORM\Column(name="MDO_PRESCRIPTION", type="text", nullable=false)
   */
  @Column({
    name: 'MDO_PRESCRIPTION',
    type: 'text',
    nullable: false
  })
  prescription?: string;

  /**
   * @ORM\Column(name="MDO_COMMENT", type="text", nullable=true)
   * @var string Commentaire de l'ordonnance.
   */
  @Column({
    name: 'MDO_COMMENT',
    type: 'text',
    nullable: true
  })
  comment?: string;

  /**
   * @ORM\Column(name="MDO_HEADER_MSG", type="text", nullable=true)
   */
  @Column({
    name: 'MDO_HEADER_MSG',
    type: 'text',
    nullable: true
  })
  headerMsg?: string;

  /**
   * @ORM\Column(name="MDO_HEADER_HEIGHT", type="integer", nullable=true)
   */
  @Column({
    name: 'MDO_HEADER_HEIGHT',
    type: 'integer',
    nullable: true
  })
  headerHeight?: number;

  /**
   * @ORM\Column(name="MDO_HEADER_ENABLE", type="integer", nullable=false)
   */
  @Column({
    name: 'MDO_HEADER_ENABLE',
    type: 'integer',
    nullable: false
  })
  headerEnable?: number;

  /**
   * @ORM\Column(name="MDO_SIGNATURE_PRATICIEN", type="text", nullable=true)
   * @var string Signature électronique du praticien encodée en base64.
   */
  @Column({
    name: 'MDO_SIGNATURE_PRATICIEN',
    type: 'text',
    nullable: true
  })
  signaturePraticien?: string;

  /**
   * @ORM\ManyToOne(targetEntity="\App\Entities\User")
   * @ORM\JoinColumn(name="USR_ID", referencedColumnName="USR_ID")
   */
  // @TODO EntityMissing
  // protected $user;

  /**
   * @ORM\ManyToOne(targetEntity="\App\Entities\Contact", inversedBy="orders")
   * @ORM\JoinColumn(name="CON_ID", referencedColumnName="CON_ID")
   */
  // @TODO EntityMissing
  // protected $contact;


  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
}

// application/Medical/Order.php