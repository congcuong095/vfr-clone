import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="T_USER_USR")
 * @ORM\AssociationOverrides({
 *  @ORM\AssociationOverride(name="organization", inversedBy="users")
 * })
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=false)
 * @Serializer\ExclusionPolicy("all")
*/
@Entity('T_MEDICAL_HEADER_MDH')
export class MedicalHeaderEntity {
  /**
   * @ORM\Column(name="MDH_ID", type="integer", nullable=false)
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="IDENTITY")
  */
  @PrimaryGeneratedColumn('increment', {
    name: 'MDH_ID',
  })
  id?: number;

  /**
   * @ORM\OneToOne(targetEntity="\App\Entities\User")
   * @ORM\JoinColumn(name="user_id", referencedColumnName="USR_ID")
   * @var \App\Entities\User
   */
  // @TODO EntityMissing
  //protected $id;

  /**
   * @ORM\Column(name="bill_message", type="text", nullable=true)
   * @var string Message facture.
   */
  @Column({
    name: 'bill_message',
    type: 'text',
    nullable: true,
    default: null
  })
  billMessage?: string;

  /**
   * @ORM\Column(name="dental_quotation_message", type="text", nullable=true)
   * @var string Message devis.
   */
  @Column({
    name: 'dental_quotation_message',
    type: 'text',
    nullable: true,
    default: null
  })
  dentalQuotationMessage?: string;

  /**
   * @ORM\Column(name="MDH_NAME", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_NAME',
    type: 'text',
    nullable: true,
    default: null
  })
  name?: string;

  /**
   * @ORM\Column(name="MDH_NAME_QUOT_HN", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_NAME_QUOT_HN',
    type: 'text',
    nullable: true,
    default: null
  })
  nameQuotHN?: string;

  /**
   * @ORM\Column(name="quotation_mutual_title", type="text", nullable=true)
   * @var string Titre du devis mutuelle
   */
  @Column({
    name: 'quotation_mutual_title',
    type: 'text',
    nullable: true,
    default: null
  })
  quotationMutualTitle?: string;

  /**
   * @ORM\Column(name="MDH_MSG", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_MSG',
    type: 'text',
    nullable: true,
    default: null
  })
  msg?: string;

  /**
   * @ORM\Column(name="MDH_ADDRESS", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_ADDRESS',
    type: 'text',
    nullable: true,
    default: null
  })
  address: string;

  /**
   * @ORM\Column(name="MDH_IDENT_PRAT", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_IDENT_PRAT',
    type: 'text',
    nullable: true,
    default: null
  })
  identPrat: string;

  /**
   * @ORM\Column(name="MDH_IDENT_PRAT_QUOT", type="text", nullable=true)
   */
  @Column({
    name: 'MDH_IDENT_PRAT_QUOT',
    type: 'text',
    nullable: true,
    default: null
  })
  identPratQuot: string;

  /**
   * @ORM\Column(name="MDH_HEIGHT", type="integer", nullable=true)
   */
  @Column({
    name: 'MDH_HEIGHT',
    type: "integer",
    nullable: true,
    default: null
  })
  height: string;

  /**
   * @ORM\Column(name="MDH_FORMAT", type="string", nullable=false)
   */
  @Column({
    name: 'MDH_FORMAT',
    type: 'string',
    nullable: false,
    default: 'A4'
  })
  format: string ;

  /**
   * @ORM\Column(name="MDH_ENABLE", type="integer", nullable=false)
   */
  @Column({
    name: 'MDH_ENABLE',
    type: 'integer',
    nullable: false,
    default: false
  })
  enable: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
}


// application/Medical/Header.php