package com.zls.myshop.commons.persistence;

import java.io.Serializable;
import java.util.Date;

public abstract class BaseEntity  implements Serializable {

    private Long id;
    private Date updated;
    private Date created;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
