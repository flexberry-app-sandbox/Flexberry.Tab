package Tab.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tab.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISTabСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "фамилия")
    private String фамилия;

    @Column(name = "отчество")
    private String отчество;

    @Column(name = "имя")
    private String имя;

    @Column(name = "табном")
    private String табном;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getфамилия() {
      return фамилия;
    }

    public void setфамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getотчество() {
      return отчество;
    }

    public void setотчество(String отчество) {
      this.отчество = отчество;
    }

    public String getимя() {
      return имя;
    }

    public void setимя(String имя) {
      this.имя = имя;
    }

    public String getтабном() {
      return табном;
    }

    public void setтабном(String табном) {
      this.табном = табном;
    }


}