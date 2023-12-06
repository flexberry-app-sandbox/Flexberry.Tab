package Tab.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tab.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Бригада
 */
@Entity(name = "IISTabБригада")
@Table(schema = "public", name = "Бригада")
public class Brigada {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "начбр")
    private String начбр;

    @Column(name = "конбр")
    private String конбр;

    @Column(name = "назначение")
    private String назначение;

    @OneToMany(mappedBy = "brigada", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Sostav> sostavs;


    public Brigada() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getначбр() {
      return начбр;
    }

    public void setначбр(String начбр) {
      this.начбр = начбр;
    }

    public String getконбр() {
      return конбр;
    }

    public void setконбр(String конбр) {
      this.конбр = конбр;
    }

    public String getназначение() {
      return назначение;
    }

    public void setназначение(String назначение) {
      this.назначение = назначение;
    }


}